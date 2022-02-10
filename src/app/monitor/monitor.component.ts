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
  @Input() dica: boolean;
  @Output() dicaChange =  new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  fechar() {
    this.dica = false;
    this.dicaChange.emit(this.dica);
  }
}
