import { Component, HostListener, Input, OnInit } from '@angular/core';
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

  @Input() keySala: string;
  @Input() sala: Observable<any>;
  @Input() nickJogador: string;

  numRodada: number;
  statusSala: string;
  vidas: number;
  keyJogador: string;
  tempoMonitor: number;
  numJogadores: number;
  numTarefasNecessarias: number;

  listaProfissoesSorteadas: Observable<any>;
  keyProfissaoSorteada: string;
  profissaoSorteada: any;

  ngUnsubscribe = new Subject();

  async ngOnInit() {
    this.sala = this.taskForceService.getSala(this.keySala);
    this.sala.pipe(takeUntil(this.ngUnsubscribe)).subscribe(s => {
      this.numRodada = s.numRodada;
      this.statusSala = s.status;
      this.vidas = s.vidas;
    });

    this.listaProfissoesSorteadas = await this.taskForceService.getProfissoesSorteadas(
      this.keySala
    );
    this.listaProfissoesSorteadas
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(lista => {
        this.numJogadores = lista.length;
        this.tempoMonitor = Math.floor(
          (5 + this.numJogadores * 5) * Math.pow(0.8, this.numRodada)
        );
        this.numTarefasNecessarias =
          (5 + this.numJogadores * 2) * Math.pow(1.2, this.numRodada);
      });
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
    this.removerProfissao();
  }
}
