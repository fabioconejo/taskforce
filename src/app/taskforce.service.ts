import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class TaskforceService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  getProfissoes(): any {
    return this.http.get('assets/json/taskforce.json');
  }
}
