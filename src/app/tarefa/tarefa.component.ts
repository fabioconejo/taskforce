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

  @Input() frase: string;
  @Input() texto: string;
  @Input() tipo: string;

  lista = [
    { id: 1, texto: 'United States' },
    { id: 2, texto: 'Australia' },
    { id: 3, texto: 'Canada' },
    { id: 4, texto: 'Brazil' },
    { id: 5, texto: 'England' }
  ];

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
          this.corBotao == 'verde';
        }

        this.tipoBotao = 'botao';
        this.textoBotao = this.texto;
        break;
      case 'escolha':
        this.corBotao = 'branco';
        this.tipoBotao = 'lista';
        this.textoBotao = this.texto;
        break;
      default:
        break;
    }
  }
}
