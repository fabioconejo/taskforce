import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  constructor(private taskForceService: TaskforceService) {}

  @Input() listaProfissoesSorteadas: Observable<any>;

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  ngOnInit() {}
}
