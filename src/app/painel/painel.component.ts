import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  maxNumTarefas: number = 8;

  @Input() tarefas: any;

  constructor() {}

  ngOnInit() {}
}
