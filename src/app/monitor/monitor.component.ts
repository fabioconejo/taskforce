import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
})
export class MonitorComponent implements OnInit {
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

  fechar() {
    this.dicaMonitor = false;
    this.dica = false;
    this.dicaChange.emit(this.dica);
  }
}
