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
  @Input() relatorioPartida: any;
  @Output() relatorioPartidaChange = new EventEmitter();

  lista: any = [];
  vida: number;
  desabilitado: boolean;

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  async ngOnInit() {
    let i: number = 0;
    this.vida = this.vidas;
    this.desabilitado = true;

    this.listaProfissoesSorteadas.pipe(take(1)).subscribe(async l => {
      for (i = 0; i < l.length; i++) {
        this.lista.push({
          imagem: l[i].imagem,
          responsavel: l[i].responsavel,
          profissao: l[i].profissao,
          acertos: l[i].acertos,
          erros: l[i].erros
        });

        this.relatorioPartida.push({
          imagem: l[i].imagem,
          responsavel: l[i].responsavel,
          profissao: l[i].profissao,
          acertos: l[i].acertos,
          erros: l[i].erros
        });

        this.relatorioPartidaChange.emit(this.relatorioPartida);

        await this.resetarProfissao();
      }
    });
    this.desabilitado = false;
  }

  async fecharRelatorio() {
    if (!this.desabilitado) {
      this.desabilitado = true;
      if (this.vida <= 0) {
        await this.taskForceService.resetarSala(this.keySala);
      }
      this.flagRelatorio = false;
      this.flagRelatorioChange.emit(this.flagRelatorio);
    }
  }

  async resetarProfissao() {
    await this.taskForceService.resetarProfissao(
      this.keySala,
      this.keyProfissaoSorteada
    );
  }
}
