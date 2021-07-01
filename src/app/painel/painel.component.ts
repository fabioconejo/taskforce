import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private taskForceService: TaskforceService) {}

  async ngOnInit() {
    //this.atualizarTarefa();
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
    this.pausa = false;

    this.taskForceService.monitorarRegistro(
      this.keySala,
      this.keyRegistro,
      this.tempoMonitor * 1000,
      async () => {
        await this.atualizarTarefa();
      },
      async () => {
        this.taskForceService.desabilitarRegistro(
          this.keySala,
          this.keyRegistro
        );
        await this.atualizarTarefa();
      }
    );
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
}
