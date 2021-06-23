import { Component, OnInit, Input } from '@angular/core';

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
  @Input() frase: string;
  @Input() texto: string;
  @Input() tipo: string;
  @Input() estado: any;
  @Input() lista: any;
  @Input() registro: any;

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

  botaoClick = (args: any): void => {
    var tarefa: any;
    tarefa = this.registro.filter(r => ((r.id = args[0]), (r.ativo = true), (r.valor = args[2])));
    for (var i = 0; i < tarefa.length; i++) {
      tarefa[i].ativo = false;
      tarefa[i].concluido = true;
    }
  };
}
