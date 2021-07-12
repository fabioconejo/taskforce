import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  constructor(private taskForceService: TaskforceService, private router: Router) {}
  keySala: string;
  numRodada: number;
  keyJogador: string;
  nickJogador: string;
  listaJogadores: Observable<any>;
  listaProfissoesSorteadas: Observable<any>;
  keyProfissaoSorteada: string;
  profissaoSorteada: any;

  async ngOnInit() {
    this.keySala = 'qlx29';
    this.keyJogador = '-MdJxZjLD3hQbZfVikp7';
    this.nickJogador = 'Fabolas';
    this.listaProfissoesSorteadas = this.taskForceService.getProfissoesSorteadas(
      this.keySala
    );
  }

  async sortearProfissao() {
    this.keyProfissaoSorteada = await this.taskForceService.sortearProfissao(
      this.keySala,
      this.keyJogador,
      this.nickJogador,
      this.numRodada,
      4
    );

    this.profissaoSorteada = await this.taskForceService.getProfissao(
      this.keySala,
      this.keyProfissaoSorteada
    );
  }

  limparRegristro() {}

  limparSorteio() {}

  adicionarJogador() {}

  removerJogador() {}

  ngOnDestroy() {
    this.taskForceService.unsubscribe();
  }
}
