import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  displayBotao: string;
  displayLista: string;
  corFundo: string;
  corFonte: string;
  sombra: string;
  @Input() tipo: string;
  @Input() cor: string;
  @Input() texto: string;
  @Input() tamanhoFonte: string;

  constructor() {}

  ngOnInit() {
    switch (this.cor) {
      case 'azul':
        this.corFonte = 'var(--white)';
        this.corFundo = 'var(--blue-jeans)';
        this.sombra = 'var(--saphire-blue)';
        break;
      case 'verde':
        this.corFonte = 'var(--white)';
        this.corFundo = 'var(--medium-sea-green)';
        this.sombra = 'var(--sea-green)';
        break;
      case 'vermelho':
        this.corFonte = 'var(--white)';
        this.corFundo = 'var(--tart-orange)';
        this.sombra = 'var(--firebrick)';
        break;
      default:
        this.corFonte = 'var(--saphire-blue)';
        this.corFundo = 'var(--semi-white)';
        this.sombra = 'var(--silver-chalice)';
        break;
    }

    switch (this.tipo) {
      case 'botao':
        this.displayBotao = 'block';
        break;
      case 'lista':
        this.displayLista = 'block';
        break;
    }
  }
}
