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

  unsubscribe() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getProfissoes(): any {
    return this.http.get('assets/json/taskforce.json');
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
      ativo: true
    };

    return this.db.database.ref('salas/' + keySala + '/jogadores').push(jogador)
      .key;
  }

  sairSala(keySala: string, keyJogador: string) {
    this.db
      .object('salas/' + keySala + '/jogadores/' + keyJogador)
      .query.ref.onDisconnect()
      .update({ativo: false});
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
}
