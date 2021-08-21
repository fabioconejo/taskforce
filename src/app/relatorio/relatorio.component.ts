import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  constructor(private taskForceService: TaskforceService) {}

  @Input() keySala: string;
  @Input() vidas: number;
  @Input() listaProfissoesSorteadas: Observable<any>;
  @Input() flagRelatorio: boolean;
  @Output() flagRelatorioChange = new EventEmitter();

  lista: any = [];

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  ngOnInit() {
    this.listaProfissoesSorteadas.pipe(take(1)).subscribe(async l => {
      console.log(l);
      await this.lista.push({
        imagem: l.imagem,
        responsavel: l.responsavel,
        profissao: l.profissao,
        acertos: l.acertos,
        erros: l.erros
      });
      console.log(this.lista);
    });
  }

  fecharRelatorio() {
    if (this.vidas <= 0) {
      this.taskForceService.resetarSala(this.keySala);
    }
    this.flagRelatorio = false;
    this.flagRelatorioChange.emit(this.flagRelatorio);
  }
}
