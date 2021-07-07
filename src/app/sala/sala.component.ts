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
  @Input() keyJogador: string;
  @Input() nickJogador: string;
  @Input() listaJogadores: Observable<any>;

  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  constructor(private taskForceService: TaskforceService) {}

  ngOnInit() {}
}
