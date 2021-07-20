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
      this.numJogadores = Object.keys(s.profissoes).length;

      this.tempoMonitor = Math.floor(
        (5 + this.numJogadores * 10) * Math.pow(0.9, this.numRodada)
      );
      console.log(this.tempoMonitor);
    });
    this.listaProfissoesSorteadas = await this.taskForceService.getProfissoesSorteadas(
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
    this.removerProfissao();
  }
}
