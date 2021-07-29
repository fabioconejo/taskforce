import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, takeUntil, takeWhile, timeout } from 'rxjs/operators';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @Input() keySala: string;
  @Input() keyJogador: string;
  @Input() keyProfissaoSorteada: string;
  @Input() profissaoSorteada: any;
  @Input() tempoMonitor: number;
  @Input() vidas: number;
  @Input() numTarefasNecessarias: number;
  @Input() numRodada: number;

  keyProfissaoMonitor: string;
  keyTarefaSorteada: string;
  keyRegistro: string;

  registro: any = [];
  idRegistroSorteado: number;
  profissao: any;
  tarefaSorteada: any;
  textoExibicao: string;
  intervalo: any;
  pausa: boolean;

  ngUnsubscribe = new Subject();

  constructor(private taskForceService: TaskforceService) {}

  async ngOnInit() {
    await this.atualizarTarefa();
    let rodada = this.numRodada;

    this.taskForceService
      .getRegistros(this.keySala)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(registros => {
        let concluidos: number = 0;

        registros.forEach((r: any) => {
          if (r.concluido) {
            concluidos++;
          }
        });

        if (concluidos >= this.numTarefasNecessarias) {
          this.taskForceService.adicionarRodada(this.keySala, rodada);
          this.taskForceService.setStatusSala(this.keySala, 'relatorio');
        }
      });
  }

  async atualizarTarefa() {
    this.pausa = true;
    this.keyProfissaoMonitor = await this.taskForceService.sortearProfissaoMonitor(
      this.keySala
    );
    this.keyTarefaSorteada = await this.taskForceService.sortearTarefa(
      this.keySala,
      this.keyProfissaoMonitor
    );
    this.tarefaSorteada = await this.taskForceService.getTarefa(
      this.keySala,
      this.keyProfissaoMonitor,
      this.keyTarefaSorteada
    );
    this.tarefaSorteada = this.taskForceService.sortearItem(
      this.tarefaSorteada
    );
    this.keyRegistro = await this.taskForceService.adicionarRegistro(
      this.keySala,
      this.keyProfissaoMonitor,
      this.keyTarefaSorteada,
      this.tarefaSorteada.verbo
    );
    this.exibirTarefa();
    setTimeout(() => {
      this.pausa = false;
    }, 100);

    this.taskForceService
      .getRegistro(this.keySala, this.keyRegistro)
      .pipe(
        takeUntil(this.ngUnsubscribe),
        takeWhile(r => {
          return !r['concluido'];
        }, true),
        timeout(this.tempoMonitor * 1000),
        catchError(async err => {
          await this.taskForceService.desabilitarRegistro(
            this.keySala,
            this.keyRegistro,
            this.vidas
          );
          await this.atualizarTarefa();
          return [];
        })
      )
      .subscribe(async r => {
        if (r['concluido']) {
          await this.atualizarTarefa();
        }
      });
  }

  exibirTarefa() {
    var texto: string;

    switch (this.tarefaSorteada.tipo) {
      case 'acao':
        texto = this.tarefaSorteada.texto;
        break;
      case 'estado':
        texto = this.tarefaSorteada.texto;
        break;
      case 'escolha':
        texto = this.tarefaSorteada.texto + ' ' + this.tarefaSorteada.verbo;
        break;
    }

    this.textoExibicao = texto;
  }

  async concluirRegistro(registro: any) {
    if (this.pausa === false) {
      await this.taskForceService.concluirRegistro(
        this.keySala,
        registro,
        this.vidas
      );
    }

    this.taskForceService.setTarefa(
      this.keySala,
      this.keyProfissaoSorteada,
      registro.key,
      { verbo: registro.texto }
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
