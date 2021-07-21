import {
  Component,
  OnInit,
  Input,
  HostListener,
  EventEmitter,
  Output
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
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
  textoConvite = 'Convidar';

  ngUnsubscribe = new Subject();

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  constructor(private taskForceService: TaskforceService) {}

  async ngOnInit() {
    this.taskForceService.limparRegistros(this.keySala);
    this.removerProfissao();
    await this.sortearProfissao();
    this.profissaoSorteadaChange.emit(this.profissaoSorteada);
    this.keyProfissaoSorteadaChange.emit(this.keyProfissaoSorteada);

    this.pronto = false;
    this.taskForceService.ficarPronto(
      this.keySala,
      this.keyProfissaoSorteada,
      this.pronto
    );

    this.listaProfissoesSorteadas
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(lista => {
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
    this.keyProfissaoSorteada = await this.taskForceService.sortearProfissao(
      this.keySala,
      this.nickJogador,
      this.numRodada,
      6
    );

    this.profissaoSorteada = await this.taskForceService.getProfissao(
      this.keySala,
      this.keyProfissaoSorteada
    );
  }

  removerProfissao() {
    this.taskForceService.removerProfissao(
      this.keySala,
      this.keyProfissaoSorteada
    );
  }

  convidar() {
    navigator.clipboard.writeText(window.location.href);
    this.textoConvite = 'Link copiado!';

    setTimeout(() => {
      this.textoConvite = 'Convidar';
    }, 3000);
  }

  ficarPronto() {
    this.pronto = !this.pronto;
    this.taskForceService.ficarPronto(
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
