import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TaskforceService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  getProfissoes(): any {
    return this.http.get('assets/json/taskforce.json');
  }

  getJogadores() {}

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
      sorteio: [],
      registro: []
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
      .ref('salas/' + keySala + '/registro/')
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
      .object('salas/' + keySala + '/registro/' + keyRegistro)
      .valueChanges()
      .pipe(
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
    var refRegistros = this.db.database.ref('salas/' + keySala + '/registro/');

    refRegistros.once('value', snapshot => {
      snapshot.forEach(r => {
        if (
          r.val().ativo &&
          r.val().idProfissao === registro.idProfissao &&
          r.val().id === registro.id &&
          r.val().texto === registro.texto
        ) {
          refRegistros
            .child(r.key)
            .child('ativo')
            .set(false);

          refRegistros
            .child(r.key)
            .child('concluido')
            .set(true);
        }
      });
    });
  }

  desabilitarRegistro(keySala: string, registro: any) {}

  keepAlive(keySala: string, keyJogador: string) {
    this.db.database
      .ref('salas/' + keySala + '/jogadores/' + keyJogador)
      .child('timeout')
      .set(+new Date());
  }
}
