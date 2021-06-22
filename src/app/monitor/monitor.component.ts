import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  texto: string;
  complemento: string;
  tempo: number = 10;
  tarefa: any;
  cloneTarefas: any;

  @Input() tarefas: any;
  @Input() registro: any;

  constructor() {}

  ngOnInit() {
    this.cloneTarefas = JSON.parse(JSON.stringify(this.tarefas));
    this.mudarTarefa(false);
    let intervalo = setInterval(() => {
      this.mudarTarefa(false);
    }, this.tempo * 1000);
  }

  mudarTarefa(concluido: boolean) {
    var registro: any;
    var j: number = 0;

    //desabilitar tarefa anterior no registro
    for (var i = 0; i < this.registro.length; i++) {
      if (this.registro[i].ativo && this.registro[i].id === this.tarefa.id) {
        this.registro[i].ativo = false;
      }
    }

    //sortear tarefa nova
    this.cloneTarefas.sort(() => 0.5 - Math.random());
    do {
      j = Math.floor(Math.random() * (this.cloneTarefas.length - 1));
      if (typeof this.tarefa === 'undefined') {
        this.tarefa = this.cloneTarefas[j];
      }
    } while (this.cloneTarefas[j].id === this.tarefa.id);

    this.tarefa = this.cloneTarefas[j];
    this.texto = this.tarefa.texto;

    switch (this.tarefa.tipo) {
      case 'acao':
        this.complemento = '';
        this.texto = this.tarefa.texto;
        break;
      case 'estado':
        j = Math.floor(Math.random() * (this.tarefa.eVerbo.length - 1));
        this.complemento = this.tarefa.estado.filter(
          e => e != this.tarefa.verbo
        )[0];
        this.texto = this.tarefa.eTexto.filter(e => e != this.tarefa.texto)[0];
        break;
      case 'escolha':
        j = Math.floor(Math.random() * (this.tarefa.lista.length - 1));
        this.complemento = this.tarefa.lista[j].texto;
        this.texto = this.tarefa.texto + ' ' + this.complemento;
        break;
    }

    //adicionar tarefa no registro
    registro = {
      id: this.tarefa.id,
      ativo: true,
      concluido: concluido,
      valor: this.complemento
    };
    this.registro.push(registro);
  }
}
