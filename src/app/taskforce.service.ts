import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, take, takeUntil, takeWhile } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import firebase from 'firebase/app';

@Injectable()
export class TaskforceService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}
  private ngUnsubscribe = new Subject();
  private timestamp: number;

  unsubscribe() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateOnDisconnect(keySala: string, keyJogador: string) {
    this.db
      .object('salas/' + keySala + '/jogadores/' + keyJogador)
      .query.ref.onDisconnect()
      .remove();
  }

  getTimestamp(): number {
    this.db
      .object('timestamp')
      .update({ timestamp: firebase.database.ServerValue.TIMESTAMP });

    return this.timestamp;
  }

  monitorarTimestamp() {
    this.db
      .object('timestamp')
      .valueChanges()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((t: number) => {
        this.timestamp = t;
      });
  }

  getProfissoes(): any {
    return this.http.get('assets/json/taskforce.json');
  }

  monitorarJogadores(keySala: string) {
    var intervaloOffline: number = 20000;
    var intervaloKick: number = 60000;

    this.db
      .object('salas/' + keySala + '/jogadores/')
      .valueChanges()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((jogador: object) => {
        for (let keyJogador in jogador) {
          if (
            jogador[keyJogador].timestamp + intervaloOffline <
            firebase.database.ServerValue.TIMESTAMP
          ) {
            if (
              !jogador[keyJogador].ativo &&
              jogador[keyJogador].timestamp + intervaloKick <
                firebase.database.ServerValue.TIMESTAMP
            ) {
              this.sairSala(keySala, keyJogador);
            } else {
              this.offline(keySala, keyJogador);
            }
          }
        }
      });
  }

  getSorteio() {}

  criarSala(): string {
    var sala: any;
    var key: string;
    key = Math.random()
      .toString(36)
      .substr(2, 5);

    sala = {
      numRodada: 0,
      vidas: 10,
      jogadores: [],
      tarefas: [],
      registros: []
    };

    this.db.database
      .ref('salas')
      .child(key)
      .set(sala);

    return key;
  }

  entrarSala(keySala: string, nick: string): string {
    var jogador = {
      nick: nick,
      ativo: true,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    return this.db.database.ref('salas/' + keySala + '/jogadores').push(jogador)
      .key;
  }

  offline(keySala: string, keyJogador: string) {
    this.db.database
      .ref('salas/' + keySala + '/jogadores')
      .child(keyJogador)
      .update({ ativo: false });
  }

  sairSala(keySala: string, keyJogador: string) {
    this.db.database
      .ref('salas/' + keySala + '/jogadores')
      .child(keyJogador)
      .remove();
  }

  adicionarRegistro(keySala: string, profissao: any, tarefa: any): string {
    var registro: any;
    registro = {
      idProfissao: profissao.id,
      id: tarefa.id,
      ativo: true,
      concluido: false,
      texto: tarefa.verbo,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    return this.db.database
      .ref('salas/' + keySala + '/registros/')
      .push(registro).key;
  }

  monitorarRegistro(
    keySala: string,
    keyRegistro: string,
    tempoIntervalo: number,
    fConcluido: () => void,
    fPrescrito: () => void
  ) {
    var tempoInicio = 0; //firebase.database.ServerValue.TIMESTAMP;
    var tempoFim;

    this.db
      .object('salas/' + keySala + '/registros/' + keyRegistro)
      .valueChanges()
      .pipe(
        takeUntil(this.ngUnsubscribe),
        takeWhile(r => {
          tempoFim = 0; //firebase.database.ServerValue.TIMESTAMP;
          return !(r['concluido'] || tempoInicio + tempoIntervalo > tempoFim);
        }, true)
      )
      .subscribe(r => {
        if (r['concluido']) {
          fConcluido();
        } else if (tempoInicio + tempoIntervalo > tempoFim) {
          fPrescrito();
        }
      });
  }

  concluirRegistro(keySala: string, registro: any) {
    var refRegistros = this.db.database.ref('salas/' + keySala + '/registros/');

    refRegistros.once('value', snapshot => {
      snapshot.forEach(r => {
        if (
          r.val().ativo &&
          r.val().idProfissao === registro.idProfissao &&
          r.val().id === registro.id &&
          r.val().texto === registro.texto
        ) {
          refRegistros.child(r.key).update({ ativo: false, concluido: true });
        }
      });
    });
  }

  desabilitarRegistro(keySala: string, keyRegistro: string) {
    this.db.database
      .ref('salas/' + keySala + '/registros/' + keyRegistro)
      .update({ ativo: false });
  }

  keepAlive(keySala: string, keyJogador: string) {
    this.db.database
      .ref('salas/' + keySala + '/jogadores/' + keyJogador)
      .update({
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        ativo: true
      });
  }
}
