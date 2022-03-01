import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
})
export class MonitorComponent implements OnInit, OnChanges {
  @Input() texto: string;
  @Input() tempo: number;
  @Input() pausa: boolean;
  @Input() corMonitor:string;
  @Input() dica: boolean;
  @Output() dicaChange = new EventEmitter();

  blinkText: string;
  dicaMonitor: boolean;

  constructor() {}

  ngOnInit() {
    this.blinkText = "_";
    this.dicaMonitor = this.dica;

    setInterval(() => {
      if(this.blinkText === '_') {
        this.blinkText = " ";
      }
      else {
        this.blinkText = "_";
      }
      
    },700);
  }

  ngOnChanges() {
    document.documentElement.style.setProperty('--tamanho', this.texto.length * 0.6 + 0.6 + 0.1 + 'em');
  }

  fechar() {
    this.dicaMonitor = false;
    this.dica = false;
    this.dicaChange.emit(this.dica);
  }
}
