import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  texto: string;
  tempo: number = 10;

  @Input() tarefas: any;

  constructor() {}

  ngOnInit() {
    this.texto = this.tarefas
      .sort(() => 0.5 - Math.random())
      .slice(0, 1)[0].texto;
  }
}
