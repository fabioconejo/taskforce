import { Component, Input, OnInit } from '@angular/core';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'contagem',
  templateUrl: './contagem.component.html',
  styleUrls: ['./contagem.component.css']
})
export class ContagemComponent implements OnInit {
  @Input() keySala:string;
  
  numero:number = 3;
  contagem:any;

  constructor(private taskForceService: TaskforceService) { }

  ngOnInit() {
    this.contagem = setInterval(() => {
      this.numero--;

      if (this.numero <= 0) {
        this.taskForceService.setStatusSala(this.keySala, 'jogo');
        this.numero = 0;
      }

    }, 1600)
  }

  ngOnDestroy() {
    clearInterval(this.contagem);
  }

}