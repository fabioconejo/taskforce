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

  ngOnInit() {}

  mudarTarefa() {}
}
