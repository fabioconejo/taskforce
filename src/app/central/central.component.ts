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
    //this.taskForceService.sortearProfissao('qlx29', '-MdJxZjLD3hQbZfVikp7', 4);
    //this.taskForceService.sortearTarefa('qlx29');
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
