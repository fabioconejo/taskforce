import { Component, OnInit } from '@angular/core';
import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  constructor(private taskForceService: TaskforceService) {}

  ngOnInit() {
    //var key = this.taskForceService.criarSala();
    //this.taskForceService.entrarSala('qlx29');
    //this.taskForceService.keepAlive('qlx29', '-MdFA3gZCm-bKtJAughA');
    //this.taskForceService.sairSala('qlx29', '-MdFA3gZCm-bKtJAughA');
  }

  sortearProfissao() {}

  limparRegristro() {}

  limparSorteio() {}

  adicionarJogador() {}

  removerJogador() {}

  manterVivo() {}
}
