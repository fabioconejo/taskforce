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
  @Input() keyProfissaoSorteada: string;
  @Input() listaProfissoesSorteadas: Observable<any>;
  @Input() flagRelatorio: boolean;
  @Output() flagRelatorioChange = new EventEmitter();

  lista: any = [];
  vida: number;

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  ngOnInit() {
    let i: number = 0;
    this.vida = this.vidas;

    this.listaProfissoesSorteadas.pipe(take(1)).subscribe(l => {
      setTimeout(() => {
        for (i = 0; i < l.length; i++) {
          this.lista.push({
            imagem: l[i].imagem,
            responsavel: l[i].responsavel,
            profissao: l[i].profissao,
            acertos: l[i].acertos,
            erros: l[i].erros
          });

          setTimeout(() => {
            this.resetarProfissao();
          }, 2000);
        }
      }, 1000);
    });
  }

  fecharRelatorio() {
    if (this.vida <= 0) {
      this.taskForceService.resetarSala(this.keySala);
    }
    this.flagRelatorio = false;
    this.flagRelatorioChange.emit(this.flagRelatorio);
  }

  resetarProfissao() {
    this.taskForceService.resetarProfissao(
      this.keySala,
      this.keyProfissaoSorteada
    );
  }

  removerProfissao() {
    this.taskForceService.removerProfissao(
      this.keySala,
      this.keyProfissaoSorteada
    );
  }
}
