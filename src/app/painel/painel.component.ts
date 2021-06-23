import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  baseProfissoes = [
    {
      profissao: 'Médico',
      tarefas: [
        {
          id: 1,
          tipo: 'acao',
          texto: 'Receitar cloroquina',
          verbo: 'Receitar',
          complemento: 'Cloroquina'
        },
        {
          id: 2,
          tipo: 'acao',
          texto: 'Medir pressão',
          verbo: 'Medir',
          complemento: 'Pressão'
        },
        {
          id: 3,
          tipo: 'acao',
          texto: 'Preencher prontuário',
          verbo: 'Preencher',
          complemento: 'Prontuário'
        },
        {
          id: 4,
          tipo: 'acao',
          texto: 'Indicar médico especialista',
          verbo: 'Indicar',
          complemento: 'Médico especialista'
        },
        {
          id: 5,
          tipo: 'acao',
          texto: 'Informar riscos da cirurgia',
          verbo: 'Informar',
          complemento: 'Riscos da cirurgia'
        },
        {
          id: 6,
          tipo: 'acao',
          texto: 'Atender paciente',
          verbo: 'Atender',
          complemento: 'Paciente'
        },
        {
          id: 7,
          tipo: 'estado',
          eTexto: ['Ligar oxímetro', 'Desligar oxímetro'],
          eVerbo: ['Ligar', 'Desligar'],
          verbo: 'Ligado',
          texto: 'Ligar oxímetro',
          complemento: 'Oxímetro',
          estado: ['Ligado', 'Desligado']
        },
        {
          id: 8,
          tipo: 'escolha',
          texto: 'Ajustar pressão do respirador para',
          verbo: 'Ajustar pressão',
          complemento: 'Respirador',
          lista: [
            { id: 1, texto: '0 psi' },
            { id: 2, texto: '20 psi' },
            { id: 3, texto: '60 psi' }
          ]
        }
      ]
    }
  ];

  registro: any = [];
  amostraTarefa: any;
  tempoMonitor: number;
  tarefaSorteada: any;

  constructor() {}

  ngOnInit() {
    this.amostraTarefa = this.baseProfissoes[0].tarefas
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    this.tempoMonitor = 10;
    this.sortearTarefa();
  }

  sortearTarefa() {
    var j: number;

    do {
      j = Math.floor(Math.random() * (this.amostraTarefa.length - 1));
      if (typeof this.tarefaSorteada === 'undefined') {
        this.tarefaSorteada = this.amostraTarefa[j];
      }
    } while (this.amostraTarefa[j].id === this.tarefaSorteada.id);

    this.tarefaSorteada = this.amostraTarefa[j];
  }

  exibirTarefa(): string {
    var texto: string;
    var complemento: string;
    var j: number;

    switch (this.tarefaSorteada.tipo) {
      case 'acao':
        complemento = '';
        texto = this.tarefaSorteada.texto;
        break;
      case 'estado':
        j = Math.floor(Math.random() * (this.tarefaSorteada.eVerbo.length - 1));
        complemento = this.tarefaSorteada.estado.filter(
          e => e != this.tarefaSorteada.verbo
        )[0];
        texto = this.tarefaSorteada.eTexto.filter(
          e => e != this.tarefaSorteada.texto
        )[0];
        break;
      case 'escolha':
        j = Math.floor(Math.random() * (this.tarefaSorteada.lista.length - 1));
        complemento = this.tarefaSorteada.lista.filter(
          l => l != this.tarefaSorteada.verbo
        )[j].texto;
        texto = this.tarefaSorteada.texto + ' ' + complemento;
        break;
    }

    return texto;
  }

  adicionarRegistro(tarefa: any) {
    var registro: any;
    registro = {
      id: tarefa.id,
      ativo: true,
      concluido: false,
      valor: tarefa.verbo
    };
    this.registro.push(registro);
  }

  desabilitarRegistro(tarefa: any) {
    for (var i = 0; i < this.registro.length; i++) {
      if (this.registro[i].ativo && this.registro[i].id === tarefa.id) {
        this.registro[i].ativo = false;
      }
    }
  }

  concluirRegistro(registro: any) {
    for (var i = 0; i < this.registro.length; i++) {
      if (
        this.registro.ativo &&
        this.registro.id === registro.id &&
        this.registro.valor === registro.valor
      ) {
        this.registro[i].ativo = false;
        this.registro[i].concluido = true;

        for (var j = 0; j < this.amostraTarefa.length; j++) {
          if (this.amostraTarefa[j].id === registro.id) {
            this.amostraTarefa[j].verbo = registro.valor;
          }
        }
      }
    }
  }
}
