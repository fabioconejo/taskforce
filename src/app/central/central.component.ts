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
    //console.log(this.taskForceService.entrarSala('qlx29'));
    //this.taskForceService.keepAlive('qlx29', '-MdF7S0Fz0TKfsZps7q7');
  }

  sortearProfissao() {}

  limparRegristro() {}

  limparSorteio() {}

  adicionarJogador() {}

  removerJogador() {}

  manterVivo() {}
}
