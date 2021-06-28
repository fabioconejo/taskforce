import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

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

  concluirRegistro(keySala: string, registro: any) {
    var teste = this.db
      .list('salas/' + keySala + '/registro/')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...(c.payload.val() as Object)
          }));
        })
      );

    console.log(teste);
  }

  desabilitarRegistro(keySala: string, registro: any) {}

  keepAlive(keySala: string, keyJogador: string) {
    this.db.database
      .ref('salas/' + keySala + '/jogadores/' + keyJogador)
      .child('timeout')
      .set(+new Date());
  }
}
