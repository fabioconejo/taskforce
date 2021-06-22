import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  amostraTarefa: any;

  constructor() {}

  ngOnInit() {
    this.amostraTarefa = this.baseProfissoes[0].tarefas
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }
}
