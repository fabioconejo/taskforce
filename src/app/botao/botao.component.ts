import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() id: number;
  @Input() idProfissao: number;
  @Input() tipo: string;
  @Input() cor: string;
  @Input() texto: string;
  @Input() tamanhoFonte: string;
  @Input() estado: any;
  @Input() lista: any;
  @Input() clickCallback: (args: any) => void;
  @Output() clique = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.atualizarCores();
  }

  atualizarCores() {
    switch (this.cor) {
      case 'azul-escuro':
        this.corFonte = 'var(--white)';
        this.corFundo = 'var(--space-cadet)';
        this.sombra = 'var(--black-fogra)';
        break;
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
        this.corFundo = 'var(--cultured)';
        this.sombra = 'var(--silver-chalice)';
        break;
    }

    switch (this.tipo) {
      case 'botao':
        this.displayBotao = 'block';
        break;
      case 'estado':
        this.displayBotao = 'block';
        break;
      case 'lista':
        this.displayLista = 'block';
        break;
    }
  }

  inverter() {
    if (this.tipo == 'estado') {
      if (this.cor == 'verde') {
        this.texto = this.estado[1];
        this.cor = 'vermelho';
      } else if (this.cor == 'vermelho') {
        this.texto = this.estado[0];
        this.cor = 'verde';
      }
    }

    this.atualizarCores();
  }
}
