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

  dicaMonitor: boolean;

  constructor() {}

  ngOnInit() {
    this.dicaMonitor = this.dica;
  }

  ngOnChanges() {
    document.documentElement.style.setProperty('--tamanho', this.texto.length * 0.6 + 0.6 + 'em');
  }

  fechar() {
    this.dicaMonitor = false;
    this.dica = false;
    this.dicaChange.emit(this.dica);
  }
}
