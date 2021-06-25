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
  idRegistroSorteado: number;
  amostraTarefa: any;
  tempoMonitor: number;
  tarefaSorteada: any;
  textoExibicao: string;
  intervalo: any;
  pausa: boolean;

  constructor() {}

  ngOnInit() {
    this.amostraTarefa = this.baseProfissoes[0].tarefas
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

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
    }, 10);

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

    do {
      j = Math.floor(Math.random() * this.amostraTarefa.length);
      if (
        typeof this.tarefaSorteada === 'undefined' &&
        this.amostraTarefa[j].tipo === 'acao'
      ) {
        this.tarefaSorteada = this.amostraTarefa[j];
      }
    } while (this.amostraTarefa[j].id === this.tarefaSorteada.id);
    console.log(this.tarefaSorteada.id);

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
          verbo = this.tarefaSorteada.lista[j].texto;
        } while (this.tarefaSorteada.verbo === verbo);

        this.tarefaSorteada.verbo = this.tarefaSorteada.lista[j].texto;
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
  }

  concluirRegistro(registro: any) {
    console.log(this.tarefaSorteada);
    for (var i = 0; i < this.registro.length; i++) {
      if (
        this.registro[i].ativo &&
        this.registro[i].id === registro.id &&
        this.registro[i].texto === registro.texto
      ) {
        this.registro[i].ativo = false;
        this.registro[i].concluido = true;

        for (var j = 0; j < this.amostraTarefa.length; j++) {
          if (this.amostraTarefa[j].id === registro.id) {
            this.amostraTarefa[j].verbo = registro.texto;
            break;
          }
        }
      }
    }
  }
}
