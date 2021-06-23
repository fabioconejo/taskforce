import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent implements OnInit {
  maxNumTarefas: number = 8;

  @Input() tarefas: any;
  @Input() registro: any;

  constructor() {}

  ngOnInit() {}
}
