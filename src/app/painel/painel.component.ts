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
  registro = [];

  amostraTarefa: any;
  tempoMonitor: number;

  constructor() {}

  ngOnInit() {
    this.amostraTarefa = this.baseProfissoes[0].tarefas
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    this.tempoMonitor = 10;
  }

  concluirTarefa(args: any) {
    var tarefa: any;
    tarefa = this.registro.filter(
      r => ((r.id = args[0]), (r.ativo = true), (r.valor = args[2]))
    );
    for (var i = 0; i < tarefa.length; i++) {
      tarefa[i].ativo = false;
      tarefa[i].concluido = true;
    }
  }
}
