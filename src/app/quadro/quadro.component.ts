import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent implements OnInit {
  maxNumTarefas: number = 8;

  @Input() tarefas: any;
  @Input() registro: any;
  @Output() quadroAtualizado = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  tarefaExecutada(args: any) {
    this.quadroAtualizado.emit(args);
  }
}
