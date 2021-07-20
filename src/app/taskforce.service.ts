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

  baseUrl(): string {
    return 'https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/';
  }

  criarSala(): string {
    var sala: any;
    var key: string;
    key = Math.random()
      .toString(36)
      .substr(2, 5);

    sala = {
      status: 'espera',
      numRodada: 1,
      vidas: 10,
      profissoes: [],
      registros: []
    };

    this.db.database
      .ref('salas')
      .child(key)
      .set(sala);

    return key;
  }

  async checarExistenciaSala(keySala: string): Promise<boolean> {
    let result = false;

    await this.db.database
      .ref('salas/')
      .orderByKey()
      .equalTo(keySala)
      .once('value', snap => {
        result = snap.val() !== null;
      });

    return result;
  }

  async checarStatusSala(keySala: string): Promise<boolean> {
    let result = false;

    await this.db.database
      .ref('salas/' + keySala + '/status/')
      .once('value', snap => {
        result = snap.val() === 'espera';
      });

    return result;
  }

  async checarNick(keySala: string, nick: string): Promise<boolean> {
    let result = false;

    await this.db.database
      .ref('salas/' + keySala + '/profissoes/')
      .orderByChild('responsavel')
      .equalTo(nick)
      .once('value', snap => {
        result = snap.val() == null;
      });

    return result;
  }

  aoSairSala(keySala: string, keyProfissao: string) {
    this.db.object('salas/' + keySala + '/profissoes/' + keyProfissao).remove();
  }

  aoDesconectarSala(keySala: string, keyProfissao: string) {
    this.db
      .object('salas/' + keySala + '/profissoes/' + keyProfissao)
      .query.ref.onDisconnect()
      .remove();
  }

  getSala(keySala: string): Observable<any> {
    return this.db.object('salas/' + keySala).valueChanges();
  }

  setStatusSala(keySala: string, status: string) {
    this.db.object('salas/' + keySala).update({ status: status });
  }

  aoDesconectarProfissao(keySala: string, keyProfissao: string) {
    this.db
      .object('salas/' + keySala + '/profissoes/' + keyProfissao)
      .query.ref.onDisconnect()
      .remove();
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
      pronto: false,
      profissao: profissao.profissao,
      imagem: profissao.imagem,
      responsavel: nickJogador,
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
        j = Math.floor(Math.random() * Object.keys(snapshot.val()).length);
        keyProfissao = Object.keys(snapshot.val())[j];
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

  getRegistro(keySala: string, keyRegistro: string): Observable<any> {
    return this.db
      .object('salas/' + keySala + '/registros/' + keyRegistro)
      .valueChanges();
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

  ficarPronto(keySala: string, keyProfissao: string, valor: boolean) {
    this.db.database
      .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
      .update({ pronto: valor });
  }
}
