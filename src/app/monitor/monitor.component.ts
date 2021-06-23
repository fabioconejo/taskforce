import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  @Input() texto: string;
  @Input() tempo: number = 10;
  @Input() pausa: boolean;

  constructor() {}

  ngOnInit() {}
}
