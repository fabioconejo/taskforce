import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css'],
})
export class QuadroComponent implements OnInit {
  maxNumTarefas: number = 8;

  @Input() idProfissao: number;
  @Input() tarefas: any;
  @Input() registro: any;
  @Input() corTarefa: any;
  @Input() idTarefaRecente:number;
  @Output() quadroAtualizado = new EventEmitter();
  @Input() dica: any;
  @Output() dicaChange = new EventEmitter();

  dicaQuadro: boolean;

  tarefasArray: any;

  constructor() {}

  ngOnInit() {
    this.tarefasArray = Object.keys(this.tarefas).map(
      (key) => this.tarefas[key]
    );
    Object.keys(this.tarefas).forEach((key, index) => {
      this.tarefasArray[index].key = key;
    });

    this.dicaQuadro = this.dica;
  }

  tarefaExecutada(args: any) {
    this.quadroAtualizado.emit(args);
  }

  fechar() {
    this.dicaQuadro = false;
    this.dica = false;
    this.dicaChange.emit(this.dica);
  }
}
