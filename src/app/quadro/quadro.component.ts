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
  @Input() dica: any;
  @Output() dicaChange = new EventEmitter();

  tarefasArray: any;

  constructor() {}

  ngOnInit() {
    this.tarefasArray = Object.keys(this.tarefas).map(key => this.tarefas[key]);
    Object.keys(this.tarefas).forEach((key, index) => {
      this.tarefasArray[index].key = key;
    });
  }

  tarefaExecutada(args: any) {
    this.quadroAtualizado.emit(args);
  }

  fechar() {
    this.dica = false;
    this.dicaChange.emit(this.dica);
  }
}
