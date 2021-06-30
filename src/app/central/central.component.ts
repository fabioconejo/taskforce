import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  constructor(private taskForceService: TaskforceService) {}
  registroConcluido: boolean;

  async ngOnInit() {
    //var key = this.taskForceService.criarSala();
    //this.taskForceService.entrarSala('qlx29', 'Pedrin');
    //this.taskForceService.keepAlive('qlx29', '-MdFA3gZCm-bKtJAughA');
    //this.taskForceService.desabilitarRegistro('qlx29', '-MdGMeK6uxrzmyO0Mfun');
    //this.taskForceService.monitorarJogadores('qlx29');
    //await this.taskForceService.sortearProfissao('qlx29', '-MdJxZjLD3hQbZfVikp7', 4);
    //await this.taskForceService.adicionarRegistro('qlx29', '-MdOUwwk_sVVrd2u_KTP', '-MdOUwwlaKgvHlWAWxos');
    //console.log(await this.taskForceService.getTarefa('qlx29', '-MdOUwwk_sVVrd2u_KTP', '-MdOUwwlaKgvHlWAWxos'));
  }

  sortearProfissao() {}

  limparRegristro() {}

  limparSorteio() {}

  adicionarJogador() {}

  removerJogador() {}

  ngOnDestroy() {
    this.taskForceService.unsubscribe();
  }
}
