import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent implements OnInit {
  maxNumTarefas: number = 8;

  @Input() idProfissao: number;
  @Input() tarefas: any;
  @Input() registro: any;
  @Output() quadroAtualizado = new EventEmitter();

  tarefasArray: any;

  constructor() {}

  ngOnInit() {
    this.tarefasArray = Object.keys(this.tarefas).map(key => this.tarefas[key]);
    console.log(this.tarefasArray[0].key);
  }

  tarefaExecutada(args: any) {
    this.quadroAtualizado.emit(args);
  }
}
