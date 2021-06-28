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
    //this.taskForceService.entrarSala('qlx29');
    //this.taskForceService.keepAlive('qlx29', '-MdFA3gZCm-bKtJAughA');
    /*this.taskForceService.monitorarRegistro(
      'qlx29',
      '-MdGMeK6uxrzmyO0Mfun',
      () => {
        console.log('Registro Ativo');
      }
    );*/
  }

  sortearProfissao() {}

  limparRegristro() {}

  limparSorteio() {}

  adicionarJogador() {}

  removerJogador() {}

  manterVivo() {}
}
