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
  sombraActive: string;
  @Input() cor: string;

  constructor() {}

  ngOnInit() {
    switch (this.cor) {
      case 'azul':
        this.corFonte = 'var(--white)';
        this.corFundo = 'var(--blue-jeans)';
        this.sombra = '0px 6px var(--saphire-blue)';
        this.sombraActive = '0px 2px var(--saphire-blue)';
        break;
      default:
        this.corFonte = '#000000';
        this.corFundo = '#ffffff';
        this.sombra = '#999999';
        break;
    }
  }
}
