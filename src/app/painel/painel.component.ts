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

  constructor() {}

  ngOnInit() {
    this.amostraTarefa = this.baseProfissoes[0].tarefas
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    this.tempoMonitor = 10;
  }

  mudarTarefa(concluido: boolean) {
    var registro: any;
    var j: number = 0;
    var tarefa: any;
    var texto: string;
    var complemento: string;

    //desabilitar tarefa anterior no registro
    for (var i = 0; i < this.registro.length; i++) {
      if (this.registro[i].ativo && this.registro[i].id === tarefa.id) {
        this.registro[i].ativo = false;
      }
    }

    //sortear tarefa nova
    do {
      j = Math.floor(Math.random() * (this.amostraTarefa.length - 1));
      if (typeof tarefa === 'undefined') {
        tarefa = this.amostraTarefa[j];
      }
    } while (this.amostraTarefa[j].id === tarefa.id);

    tarefa = this.amostraTarefa[j];
    texto = tarefa.texto;

    switch (tarefa.tipo) {
      case 'acao':
        complemento = '';
        texto = tarefa.texto;
        break;
      case 'estado':
        j = Math.floor(Math.random() * (tarefa.eVerbo.length - 1));
        complemento = tarefa.estado.filter(e => e != tarefa.verbo)[0];
        texto = tarefa.eTexto.filter(e => e != tarefa.texto)[0];
        break;
      case 'escolha':
        j = Math.floor(Math.random() * (tarefa.lista.length - 1));
        complemento = tarefa.lista.filter(l => l != tarefa.verbo)[j].texto;
        texto = tarefa.texto + ' ' + complemento;
        break;
    }

    //adicionar tarefa no registro
    registro = {
      id: tarefa.id,
      ativo: true,
      concluido: concluido,
      valor: complemento
    };
    this.registro.push(registro);
  }

  sortearTarefa(): any {
    var tarefa: any;
    var j: number;

    do {
      j = Math.floor(Math.random() * (this.amostraTarefa.length - 1));
      if (typeof tarefa === 'undefined') {
        tarefa = this.amostraTarefa[j];
      }
    } while (this.amostraTarefa[j].id === tarefa.id);

    tarefa = this.amostraTarefa[j];
    texto = tarefa.texto;

    switch (tarefa.tipo) {
      case 'acao':
        complemento = '';
        texto = tarefa.texto;
        break;
      case 'estado':
        j = Math.floor(Math.random() * (tarefa.eVerbo.length - 1));
        complemento = tarefa.estado.filter(e => e != tarefa.verbo)[0];
        texto = tarefa.eTexto.filter(e => e != tarefa.texto)[0];
        break;
      case 'escolha':
        j = Math.floor(Math.random() * (tarefa.lista.length - 1));
        complemento = tarefa.lista.filter(l => l != tarefa.verbo)[j].texto;
        texto = tarefa.texto + ' ' + complemento;
        break;
    }

    return tarefa;
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

  exibirTarefa() {}

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
      }
    }
  }
}
