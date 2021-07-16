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

  keyProfissaoMonitor: string;
  keyTarefaSorteada: string;
  keyRegistro: string;

  registro: any = [];
  idRegistroSorteado: number;
  profissao: any;
  tempoMonitor: number = 10;
  tarefaSorteada: any;
  textoExibicao: string;
  intervalo: any;
  pausa: boolean;

  ngUnsubscribe = new Subject();

  constructor(private taskForceService: TaskforceService) {}

  async ngOnInit() {
    await this.atualizarTarefa();
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
          this.taskForceService.desabilitarRegistro(
            this.keySala,
            this.keyRegistro
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
    var complemento: string;
    var j: number;
    var lista: any;

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

  concluirRegistro(registro: any) {
    this.taskForceService.concluirRegistro(this.keySala, registro);
    this.taskForceService.setTarefa(
      this.keySala,
      this.keyProfissaoSorteada,
      this.keyTarefaSorteada,
      { verbo: registro.texto }
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
