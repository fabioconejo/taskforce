import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  textoBotao: string;
  tipoBotao: string;
  corBotao: string;

  @Input() id: number;
  @Input() idProfissao: number;
  @Input() frase: string;
  @Input() texto: string;
  @Input() tipo: string;
  @Input() estado: any;
  @Input() lista: any;
  @Input() registro: any;
  @Output() tarefaExecutada = new EventEmitter();

  constructor() {}

  ngOnInit() {
    switch (this.tipo) {
      case 'acao':
        this.corBotao = 'azul';
        this.tipoBotao = 'botao';
        this.textoBotao = this.texto;
        break;
      case 'estado':
        if (this.corBotao == 'verde') {
          this.corBotao = 'vermelho';
        } else {
          this.corBotao = 'verde';
        }

        this.tipoBotao = 'estado';
        this.textoBotao = this.texto;
        break;
      case 'escolha':
        this.corBotao = 'branco';
        this.tipoBotao = 'lista';
        this.textoBotao = this.texto;
        break;
      default:
        this.corBotao = 'azul';
        this.tipoBotao = 'botao';
        this.textoBotao = this.texto;
        break;
    }
  }

  botaoClick(args: any) {
    this.tarefaExecutada.emit(args);
  }
}
