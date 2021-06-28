import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, takeUntil, takeWhile } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TaskforceService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}
  private ngUnsubscribe = new Subject();

  getProfissoes(): any {
    return this.http.get('assets/json/taskforce.json');
  }

  monitorarJogadores(keySala: string) {
    var intervaloOffline: number;
    var intervaloKick: number;

    this.db
      .object('salas/' + keySala + '/jogadores/')
      .valueChanges()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((jogadores: Object) => {
        console.log(jogadores);
        for (let j in jogadores) {
          console.log(j['timestamp']);
          if (j['timestamp'] + intervaloOffline < +new Date()) {
            if (j['timestamp'] + intervaloKick < +new Date()) {
            } else {
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
      timestamp: +new Date()
    };

    return this.db.database.ref('salas/' + keySala + '/jogadores').push(jogador)
      .key;
  }

  sairSala(keySala: string, keyJogador: string) {
    this.db.database
      .ref('salas/' + keySala + '/jogadores')
      .child(keyJogador)
      .remove();

    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  adicionarRegistro(keySala: string, profissao: any, tarefa: any): string {
    var registro: any;
    registro = {
      idProfissao: profissao.id,
      id: tarefa.id,
      ativo: true,
      concluido: false,
      texto: tarefa.verbo
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
    var tempoInicio = +new Date();
    var tempoFim;

    this.db
      .object('salas/' + keySala + '/registros/' + keyRegistro)
      .valueChanges()
      .pipe(
        takeUntil(this.ngUnsubscribe),
        takeWhile(r => {
          tempoFim = +new Date();

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
      .child('timeout')
      .set(+new Date());
  }
}
