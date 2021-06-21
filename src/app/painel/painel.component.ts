import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  nomeProfissao: string;
  imgProfissao: string;
  tarefas: any;
  maxNumTarefas: number = 8;

  @Input() numTarefas: number;
  @Input() profissao: any;

  constructor() {}

  ngOnInit() {
    this.numTarefas = 6;
  }
}
