import { Component, OnInit, Input } from '@angular/core';
import { TaskforceService } from '../taskforce.service';

import profissoesJson from '../../assets/json/taskforce.json';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  registro: any = [];
  idRegistroSorteado: number;
  amostraTarefa: any;
  tempoMonitor: number;
  tarefaSorteada: any;
  textoExibicao: string;
  intervalo: any;
  pausa: boolean;

  constructor(private taskForceService: TaskforceService) {}

  ngOnInit() {
    console.log(profissoesJson);
    var baseProfissoes = this.taskForceService.getProfissoes();
    this.amostraTarefa = baseProfissoes[1].tarefas
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    this.tempoMonitor = 10;
    this.atualizarTarefa();
    this.checarTarefa();
  }

  atualizarTarefa() {
    this.pausa = true;
    clearInterval(this.intervalo);
    this.sortearTarefa();
    this.adicionarRegistro();
    this.textoExibicao = this.exibirTarefa();
    setTimeout(() => {
      this.pausa = false;
    }, 100);

    this.intervalo = setInterval(() => {
      this.desabilitarRegistro();
      this.sortearTarefa();
      this.adicionarRegistro();
      this.textoExibicao = this.exibirTarefa();
    }, this.tempoMonitor * 1000);
  }

  checarTarefa() {
    setInterval(() => {
      if (this.registro[this.idRegistroSorteado].concluido) {
        this.atualizarTarefa();
      }
    }, 10);
  }

  sortearTarefa() {
    var j: number;
    var verbo: string;

    if (typeof this.tarefaSorteada === 'undefined') {
      do {
        j = Math.floor(Math.random() * this.amostraTarefa.length);
      } while (this.amostraTarefa[j].tipo !== 'acao');
    } else {
      do {
        j = Math.floor(Math.random() * this.amostraTarefa.length);
      } while (this.amostraTarefa[j].id === this.tarefaSorteada.id);
    }

    this.tarefaSorteada = this.amostraTarefa[j];

    switch (this.tarefaSorteada.tipo) {
      case 'acao':
        break;
      case 'estado':
        if (this.tarefaSorteada.estado[0] === this.tarefaSorteada.verbo) {
          this.tarefaSorteada.verbo = this.tarefaSorteada.estado[1];
          this.tarefaSorteada.texto = this.tarefaSorteada.eTexto[1];
        } else {
          this.tarefaSorteada.verbo = this.tarefaSorteada.estado[0];
          this.tarefaSorteada.texto = this.tarefaSorteada.eTexto[0];
        }
        break;
      case 'escolha':
        do {
          j = Math.floor(Math.random() * this.tarefaSorteada.lista.length);
          verbo = this.tarefaSorteada.lista[j];
        } while (this.tarefaSorteada.verbo === verbo);

        this.tarefaSorteada.verbo = this.tarefaSorteada.lista[j];
        break;
    }
  }

  exibirTarefa(): string {
    var texto: string;
    var complemento: string;
    var j: number;
    var lista: any;

    switch (this.tarefaSorteada.tipo) {
      case 'acao':
        texto = this.tarefaSorteada.texto;
        break;
      case 'estado':
        texto = this.tarefaSorteada.texto;
        break;
      case 'escolha':
        texto = this.tarefaSorteada.texto + ' ' + this.tarefaSorteada.verbo;
        break;
    }

    return texto;
  }

  adicionarRegistro() {
    var registro: any;
    registro = {
      id: this.tarefaSorteada.id,
      ativo: true,
      concluido: false,
      texto: this.tarefaSorteada.verbo
    };

    //adiciona o registro na lista e armazena a posicao
    this.idRegistroSorteado = this.registro.push(registro) - 1;
  }

  desabilitarRegistro() {
    for (var i = 0; i < this.registro.length; i++) {
      if (
        this.registro[i].ativo &&
        this.registro[i].id === this.tarefaSorteada.id
      ) {
        this.registro[i].ativo = false;
      }
    }

    //Reseta o valor esperado
    switch (this.tarefaSorteada.tipo) {
      case 'acao':
        break;
      case 'estado':
        if (this.tarefaSorteada.estado[0] === this.tarefaSorteada.verbo) {
          this.tarefaSorteada.verbo = this.tarefaSorteada.estado[1];
          this.tarefaSorteada.texto = this.tarefaSorteada.eTexto[1];
        } else {
          this.tarefaSorteada.verbo = this.tarefaSorteada.estado[0];
          this.tarefaSorteada.texto = this.tarefaSorteada.eTexto[0];
        }
        break;
      case 'escolha':
        this.tarefaSorteada.verbo = '';
        break;
    }
  }

  concluirRegistro(registro: any) {
    for (var i = 0; i < this.registro.length; i++) {
      if (
        this.registro[i].ativo &&
        this.registro[i].id === registro.id &&
        this.registro[i].texto === registro.texto
      ) {
        this.registro[i].ativo = false;
        this.registro[i].concluido = true;
      }
    }

    for (var i = 0; i < this.amostraTarefa.length; i++) {
      if (this.amostraTarefa[i].id === registro.id) {
        this.amostraTarefa[i].verbo = registro.texto;
        break;
      }
    }
  }
}
