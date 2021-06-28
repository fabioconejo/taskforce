import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
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

  entrarSala(key: string): string {
    var jogador = {
      nick: 'Fabolas',
      ativo: true,
      timeout: new Date()
    };

    return this.db.database.ref('salas/' + key + '/jogadores').push(jogador)
      .key;
  }

  sairSala() {}

  adicionarRegistro(registro: any) {}

  concluirRegistro(registro: any) {}

  desabilitarRegistro(registro: any) {}

  keepAlive() {}
}
