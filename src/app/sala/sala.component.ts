import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  @Input() keySala: string;
  @Input() keyProfissaoSorteada: string;
  @Input() nickJogador: string;
  @Input() numRodada: number;
  @Input() vidas: number;
  @Input() listaProfissoesSorteadas: Observable<any>;

  pronto: boolean;

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  constructor(private taskForceService: TaskforceService) {}

  ngOnInit() {
    this.pronto = false;
    this.taskForceService.ficarPronto(
      this.keySala,
      this.keyProfissaoSorteada,
      this.pronto
    );
  }

  ficarPronto() {
    this.pronto = !this.pronto;
    this.taskForceService.ficarPronto(
      this.keySala,
      this.keyProfissaoSorteada,
      this.pronto
    );
  }
}
