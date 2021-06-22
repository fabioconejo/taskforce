import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  nomeProfissao: string;
  imgProfissao: string;
  numTarefas: number;
  maxNumTarefas: number = 8;

  @Input() tarefas: any;
  @Input() profissao: any;

  constructor() {}

  ngOnInit() {
    this.numTarefas = this.tarefas.length;
  }
}
