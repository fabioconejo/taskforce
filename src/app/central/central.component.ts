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

  ngOnInit() {
    //var key = this.taskForceService.criarSala();
    //this.taskForceService.entrarSala('qlx29', 'Pedrin');
    //this.taskForceService.keepAlive('qlx29', '-MdFA3gZCm-bKtJAughA');
    //this.taskForceService.desabilitarRegistro('qlx29', '-MdGMeK6uxrzmyO0Mfun');
    //this.taskForceService.monitorarJogadores('qlx29');
    this.taskForceService.updateOnDisconnect('qlx29', '-MdKVJFCZ8XtaMz5TTJd');
  }

  sortearProfissao() {}

  limparRegristro() {}

  limparSorteio() {}

  adicionarJogador() {}

  removerJogador() {}

  manterVivo() {
    setInterval(() => {
      this.taskForceService.keepAlive('qlx29', '-MdJxZjLD3hQbZfVikp7');
    }, 5000);
  }

  ngOnDestroy() {
    this.taskForceService.unsubscribe();
  }
}
