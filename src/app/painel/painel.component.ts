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

  @Input() numTarefas: number;
  @Input() profissao: any;

  constructor() {}

  ngOnInit() {}
}
