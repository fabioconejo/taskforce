import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class TaskforceService {
  constructor(private db: AngularFireDatabase) {}

  getProfissoes(): any {
    var profissoes: any;
    var ref = this.db.database.ref('profissoes');

    ref.on(
      'value',
      snapshot => {
        profissoes = snapshot.val();
      },
      errorObject => {
        console.log('The read failed: ' + errorObject.name);
      }
    );

    return profissoes;
  }
}
