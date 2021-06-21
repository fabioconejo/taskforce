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
      listaAcoes: [
        {
          texto: 'Receitar cloroquina',
          verbo: 'Receitar',
          complemento: 'Cloroquina'
        },
        {
          texto: 'Medir pressão',
          verbo: 'Medir',
          complemento: 'Pressão'
        },
        {
          texto: 'Preencher prontuário',
          verbo: 'Preencher',
          complemento: 'Prontuário'
        },
        {
          texto: 'Receitar cloroquina',
          verbo: 'Receitar',
          complemento: 'Cloroquina'
        },
        {
          texto: 'Receitar cloroquina',
          verbo: 'Receitar',
          complemento: 'Cloroquina'
        },
        {
          texto: 'Receitar cloroquina',
          verbo: 'Receitar',
          complemento: 'Cloroquina'
        }
      ]
    }
  ];

  estado = ['Ligado', 'Desligado'];

  lista = [
    { id: 1, texto: 'United States' },
    { id: 2, texto: 'Australia' },
    { id: 3, texto: 'Canada' },
    { id: 4, texto: 'Brazil' },
    { id: 5, texto: 'England' }
  ];

  constructor() {}

  ngOnInit() {}
}
