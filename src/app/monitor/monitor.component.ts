import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  texto: string;
  tempo: number = 20;
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
    this.texto = this.tarefa
      .sort(() => 0.5 - Math.random())
      .slice(0, 1)[0].texto;
    this.registro.push('{id:' + this.tarefa[0].id + ', ativo:' + true + '}');
    console.log(this.registro);
  }
}
