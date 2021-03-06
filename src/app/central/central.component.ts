import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { TaskforceService } from '../taskforce.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CentralComponent implements OnInit {
  constructor(
    private taskForceService: TaskforceService,
    private router: Router
  ) {}

  @Input() keySala: string;
  @Output() keySalaChange = new EventEmitter();
  @Input() sala: Observable<any>;
  @Input() nickJogador: string;

  numRodada: number;
  statusSala: string;
  vidas: number;
  keyJogador: string;
  tempoMonitor: number;
  numJogadores: number;
  numTarefasNecessarias: number;
  flagRelatorio: boolean;
  relatorioPartida:any = [];
  dica: boolean = false;
  visibilidadeURL: boolean;
  privacidade: boolean;
  lider:string

  listaProfissoesSorteadas: Observable<any>;
  keyProfissaoSorteada: string;
  profissaoSorteada: any;

  ngUnsubscribe = new Subject();
  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  async ngOnInit() {
    this.flagRelatorio = false;
    this.sala = this.taskForceService.getSala(this.keySala);
    this.sala.pipe(takeUntil(this.ngUnsubscribe)).subscribe(async (s) => {
      this.numRodada = s.numRodada;
      this.statusSala = s.status;
      this.vidas = s.vidas;
      this.visibilidadeURL = s.visibilidadeURL;
      this.privacidade = s.privacidade;

      if(!await this.taskForceService.checarNick(this.keySala, s.lider)) {
        this.lider = s.lider;
      }
      else {
        this.taskForceService.designarLider(this.keySala, this.nickJogador);
        this.lider = this.nickJogador;
      }

      if (this.visibilidadeURL) {
        this.router.navigate(['/' + this.keySala]);
      } else {
        this.router.navigate(['/']);
      }

      if (this.vidas <= 0) {
        this.taskForceService.setStatusSala(this.keySala, 'espera');
      }
    });

    this.listaProfissoesSorteadas =
      await this.taskForceService.getProfissoesSorteadas(this.keySala);
    this.listaProfissoesSorteadas
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (lista) => {
        if (this.keyProfissaoSorteada) {
          if (
            !(await this.taskForceService.getProfissao(
              this.keySala,
              this.keyProfissaoSorteada
            ))
          ) {
            this.keySala = null;
            this.keySalaChange.emit(this.keySala);
            this.router.navigate(['/']);
          }
        }

        this.numJogadores = lista.length;
        this.tempoMonitor = Math.floor(
          (10 + this.numJogadores * 5) * Math.pow(0.9, this.numRodada)
        );
        this.numTarefasNecessarias = Math.floor(
          (5 + this.numJogadores * 2) * Math.pow(1.2, this.numRodada)
        );
      });
  }

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

    if (this.numJogadores <= 1) {
      this.taskForceService.removerSala(this.keySala);
    }
  }
}
