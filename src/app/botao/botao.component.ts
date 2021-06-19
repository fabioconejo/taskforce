import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  corFundo: string;
  corFonte: string;
  sombra: string;
  @Input() cor: string;

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
      default:
        this.corFonte = '#000000';
        this.corFundo = '#ffffff';
        this.sombra = '#999999';
        break;
    }
  }
}
