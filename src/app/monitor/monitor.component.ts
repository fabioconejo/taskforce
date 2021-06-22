import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  texto: string;
  tempo: number = 10;
  tarefa: any;

  @Input() tarefas: any;
  @Input() registro: any;

  constructor() {}

  ngOnInit() {
    this.tarefa = JSON.parse(JSON.stringify(this.tarefas));
    let intervalo = setInterval(() => {
      this.mudarTarefa();
    }, this.tempo * 1000);
  }

  mudarTarefa() {
    var registro: any;
    for (var i = 0; i < this.registro.length; i++) {
      if (this.registro[i].ativo && this.registro[i].id === this.tarefa[0].id) {
        this.registro[i].ativo = false;
      }
    }
    this.texto = this.tarefa
      .sort(() => 0.5 - Math.random())
      .slice(0, 1)[0].texto;
    registro = {
      id: this.tarefa[0].id,
      ativo: true,
      valor: this.tarefa[0].verbo
    };
    this.registro.push(registro);
  }
}
