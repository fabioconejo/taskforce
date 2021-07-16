import { Component, OnInit, Input } from '@angular/core';
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
  @Input() nickJogador: string;
  @Input() numRodada: number;
  @Input() vidas: number;
  @Input() listaProfissoesSorteadas: Observable<any>;

  pronto: boolean;

  ngUnsubscribe = new Subject();

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  constructor(private taskForceService: TaskforceService) {}

  ngOnInit() {
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

        if (prontos === total) {
          this.taskForceService.setStatusSala(this.keySala, 'jogo');
        }
      });
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
