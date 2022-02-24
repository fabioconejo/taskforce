import { style } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  @ViewChild('b') button: ElementRef;
  @ViewChild('l') list: ElementRef;

  displayBotao: string;
  displayLista: string;
  corFundo: string;
  corFonte: string;
  sombra: string;
  @Input() key: string;
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
    this.checarTipoAcao();
  }

  checarTipoAcao() {
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
  }
}
