import {
  Component,
  OnInit,
  Input,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css'],
})
export class SalaComponent implements OnInit {
  @Input() keySala: string;
  @Input() keyProfissaoSorteada: string;
  @Output() keyProfissaoSorteadaChange = new EventEmitter();
  @Input() profissaoSorteada: any;
  @Output() profissaoSorteadaChange = new EventEmitter();
  @Input() nickJogador: string;
  @Input() numRodada: number;
  @Input() vidas: number;
  @Input() listaProfissoesSorteadas: Observable<any>;

  pronto: boolean;
  desabilitado: boolean;
  textoConvite = 'Convidar';
  keyProfissaoSorteadaAnterior = '';

  ngUnsubscribe = new Subject();

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  constructor(private taskForceService: TaskforceService, private router: Router) {}

  async ngOnInit() {
    this.desabilitado = true;
    this.taskForceService.limparRegistros(this.keySala);
    await this.sortearProfissao();
    this.profissaoSorteadaChange.emit(this.profissaoSorteada);
    this.keyProfissaoSorteadaChange.emit(this.keyProfissaoSorteada);
    await this.removerProfissao();

    this.pronto = false;

    setTimeout(() => {
      this.desabilitado = false;
    }, 1000);

    this.listaProfissoesSorteadas
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((lista) => {
        let total: number = lista.length;
        let prontos: number = 0;

        lista.forEach((l: any) => {
          if (l.pronto) {
            prontos++;
          }
        });

        if (prontos === total && prontos > 0) {
          this.taskForceService.setStatusSala(this.keySala, 'jogo');
        }
      });
  }

  async sortearProfissao() {
    this.keyProfissaoSorteadaAnterior = this.keyProfissaoSorteada;
    this.keyProfissaoSorteada = await this.taskForceService.sortearProfissao(
      this.keySala,
      this.nickJogador,
      this.numRodada
    );

    this.profissaoSorteada = await this.taskForceService.getProfissao(
      this.keySala,
      this.keyProfissaoSorteada
    );
  }

  async removerProfissao() {
    await this.taskForceService.removerProfissao(
      this.keySala,
      this.keyProfissaoSorteadaAnterior
    );
  }

  alterarVisibilidadeURL() {
    this.router.navigate(["/"]);
  }

  alterarPrivacidade() {

  }

  convidar() {
    let url = window.location.href
    console.log(url.split("")[url.length-7]);
    if (url.split("")[url.length-7] !== "/") {
      url += this.keySala;
    }

    navigator.clipboard.writeText(url);
    this.textoConvite = 'Link copiado!';

    setTimeout(() => {
      this.textoConvite = 'Convidar';
    }, 3000);
  }

  async kickar(keyProfissao) {
    await this.taskForceService.removerProfissao(this.keySala, keyProfissao);
  }

  async ficarPronto() {
    this.pronto = !this.pronto;
    await this.taskForceService.ficarPronto(
      this.keySala,
      this.keyProfissaoSorteada,
      this.pronto
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
