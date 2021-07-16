import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { TaskforceService } from '../taskforce.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  constructor(
    private taskForceService: TaskforceService,
    private router: Router
  ) {}
  keySala: string;
  sala: Observable<any>;
  numRodada: number;
  statusSala: string;
  vidas: number;
  keyJogador: string;
  nickJogador: string;
  listaProfissoesSorteadas: Observable<any>;
  keyProfissaoSorteada: string;
  profissaoSorteada: any;

  ngUnsubscribe = new Subject();

  async ngOnInit() {
    this.keySala = 'qlx29';
    this.nickJogador = 'Fabolas';
    this.sala = this.taskForceService.getSala(this.keySala);
    this.sala.pipe(takeUntil(this.ngUnsubscribe)).subscribe(s => {
      this.numRodada = s.numRodada;
      this.statusSala = s.status;
      this.vidas = s.vidas;
    });
    this.listaProfissoesSorteadas = this.taskForceService.getProfissoesSorteadas(
      this.keySala
    );
  }

  limparRegristro() {}

  limparSorteio() {}

  adicionarJogador() {}

  removerProfissao() {
    this.taskForceService.removerProfissao(
      this.keySala,
      this.keyProfissaoSorteada
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    //this.removerProfissao();
  }
}
