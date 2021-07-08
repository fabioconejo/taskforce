import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  map,
  take,
  takeUntil,
  takeWhile,
  timeout,
  catchError
} from 'rxjs/operators';
import { interval, Observable, Subject, timer } from 'rxjs';
import { DataSnapshot } from '@angular/fire/database/interfaces';

@Injectable()
export class TaskforceService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}
  private ngUnsubscribe = new Subject();

  baseUrl(): string {
    return 'https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/';
  }

  unsubscribe() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  criarSala(): string {
    var sala: any;
    var key: string;
    key = Math.random()
      .toString(36)
      .substr(2, 5);

    sala = {
      status: 'Em espera',
      numRodada: 1,
      vidas: 10,
      jogadores: [],
      profissoes: [],
      registros: []
    };

    this.db.database
      .ref('salas')
      .child(key)
      .set(sala);

    return key;
  }

  aoEntrarSala(keySala: string, nick: string): string {
    var jogador = {
      nick: nick,
      ativo: true
    };

    return this.db.database.ref('salas/' + keySala + '/jogadores').push(jogador)
      .key;
  }

  aoSairSala(keySala: string, keyJogador: string) {
    this.db
      .object('salas/' + keySala + '/jogadores/' + keyJogador)
      .update({ ativo: false });
  }

  aoDesconectarSala(keySala: string, keyJogador: string) {
    this.db
      .object('salas/' + keySala + '/jogadores/' + keyJogador)
      .query.ref.onDisconnect()
      .update({ ativo: false });
  }

  aoDesconectarProfissao(keySala: string, keyProfissao: string) {
    this.db
      .object('salas/' + keySala + '/profissoes/' + keyProfissao)
      .query.ref.onDisconnect()
      .update({ ativo: false });
  }

  getProfissoes(): any {
    return this.http.get('assets/json/taskforce.json').toPromise();
  }

  getProfissoesSorteadas(keySala: string): any {
    return this.db
      .list('salas/' + keySala + '/profissoes/')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...(c.payload.val() as {})
          }));
        })
      );
  }

  async sortearProfissao(
    keySala: string,
    keyJogador:string,
    nickJogador: string,
    numRodada: number,
    numTarefas: number
  ): Promise<string> {
    var profissoes = await this.getProfissoes();
    var profissao = profissoes[Math.floor(Math.random() * profissoes.length)];

    var tarefas = profissao.tarefas
      .sort(() => 0.5 - Math.random())
      .slice(0, numTarefas);

    var info = {
      id: profissao.id,
      ativo: true,
      profissao: profissao.profissao,
      imagem: profissao.imagem,
      responsavel: keyJogador,
      nickResponsavel: nickJogador,
      numRodada: numRodada
    };

    var keyProfissao = this.db.database
      .ref('salas/' + keySala + '/profissoes/')
      .push(info).key;

    for (var i = 0; i < tarefas.length; i++) {
      this.db.database
        .ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/tarefas/')
        .push(tarefas[i]);
    }

    return keyProfissao;
  }

  async sortearProfissaoMonitor(keySala: string): Promise<string> {
    var keyProfissao: string;
    var snapshotTarefas: DataSnapshot;
    var j: number;

    await this.db.database
      .ref('salas/' + keySala + '/profissoes/')
      .once('value', snapshot => {
        do {
          j = Math.floor(Math.random() * Object.keys(snapshot.val()).length);
          keyProfissao = Object.keys(snapshot.val())[j];
        } while (!snapshot.child(keyProfissao).val().ativo);
      });

    return keyProfissao;
  }

  async getProfissao(keySala: string, keyProfissao: string): Promise<any> {
    var profissao: any;

    await this.db.database
      .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
      .once('value', snapshot => {
        profissao = snapshot.val();
      });

    return profissao;
  }

  removerProfissao(keySala: string, keyProfissao: string) {
    this.db.database
      .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
      .remove();
  }

  async sortearTarefa(keySala: string, keyProfissao: string): Promise<string> {
    var keyTarefa: string;

    await this.db.database
      .ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/tarefas/')
      .once('value', snapshot => {
        keyTarefa = Object.keys(snapshot.val())[
          Math.floor(Math.random() * Object.keys(snapshot.val()).length)
        ];
      });

    return keyTarefa;
  }

  async getTarefa(
    keySala: string,
    keyProfissao: string,
    keyTarefa: string
  ): Promise<any> {
    var tarefa: any;

    await this.db.database
      .ref(
        'salas/' +
          keySala +
          '/profissoes/' +
          keyProfissao +
          '/tarefas/' +
          keyTarefa
      )
      .once('value', snapshot => {
        tarefa = snapshot.val();
      });

    return tarefa;
  }

  setTarefa(
    keySala: string,
    keyProfissao: string,
    keyTarefa: string,
    tarefa: any
  ) {
    this.db.database
      .ref(
        'salas/' +
          keySala +
          '/profissoes/' +
          keyProfissao +
          '/tarefas/' +
          keyTarefa
      )
      .update(tarefa);
  }

  sortearItem(tarefa: any): any {
    switch (tarefa.tipo) {
      case 'acao':
        break;
      case 'estado':
        if (tarefa.estado[0] === tarefa.verbo) {
          tarefa.verbo = tarefa.estado[1];
          tarefa.texto = tarefa.eTexto[1];
        } else {
          tarefa.verbo = tarefa.estado[0];
          tarefa.texto = tarefa.eTexto[0];
        }
        break;
      case 'escolha':
        do {
          var j = Math.floor(Math.random() * tarefa.lista.length);
          var verbo = tarefa.lista[j];
        } while (tarefa.verbo === verbo);

        tarefa.verbo = tarefa.lista[j];
        break;
    }

    return tarefa;
  }

  async adicionarRegistro(
    keySala: string,
    keyProfissao: string,
    keyTarefa: string,
    texto: string
  ): Promise<string> {
    var registro: any;
    var idProfissao: number;
    var idTarefa: number;
    var snapshotTarefas: DataSnapshot;

    await this.db.database
      .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
      .once('value', snapshot => {
        idProfissao = snapshot.val().id;
        snapshotTarefas = snapshot.child('tarefas').child(keyTarefa);
        idTarefa = snapshotTarefas.val().id;
      });

    registro = {
      idProfissao: idProfissao,
      id: idTarefa,
      ativo: true,
      concluido: false,
      texto: texto
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
    var tempoFim: number;

    this.db
      .object('salas/' + keySala + '/registros/' + keyRegistro)
      .valueChanges()
      .pipe(
        takeUntil(this.ngUnsubscribe),
        takeWhile(r => {
          return !r['concluido'];
        }, true),
        timeout(tempoIntervalo),
        catchError(err => {
          fPrescrito();
          return [];
        })
      )
      .subscribe(r => {
        if (r['concluido']) {
          fConcluido();
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
