import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(
    private taskForceService: TaskforceService,
    private router: Router
  ) {
    this.router.events.subscribe(async (val) => {
      if (val instanceof RoutesRecognized) {
        try {
          this.keySala = val.state.root.firstChild.params['keySala'];
          if (
            !(await this.taskForceService.checarExistenciaSala(this.keySala))
          ) {
            this.keySala = null;
            this.router.navigate(['/']);
          }
        } catch (e) {}
      }
    });
  }

  @Input() keySala: string;
  @Output() keySalaChange = new EventEmitter();
  @Input() nickJogador: string;
  @Output() nickJogadorChange = new EventEmitter();

  mensagem = '';
  imagemBox: string;
  intervaloCarrossel: any;
  numCarrossel: number = 4;
  carrossel: any = [
    {
      imagem: 'tutorial-0.png',
      texto: 'Chama a galera para um chat de voz (sugestão de 4 a 10 pessoas)',
    },
    {
      imagem: 'tutorial-1.png',
      texto: 'Veja qual profissão foi sorteada para você e para seus amigos',
    },
    {
      imagem: 'tutorial-2.png',
      texto:
        'Fique atento à tarefa exibida no monitor e informe as tarefas que não são suas',
    },
    {
      imagem: 'tutorial-3.png',
      texto: 'Execute as tarefas que estão na sua responsabilidade',
    },
    {
      imagem: 'tutorial-4.png',
      texto:
        'Cuidado, cada falha significa vida a menos. Sobreviva o maior número de rodadas que conseguir',
    },
  ];
  baseUrl = this.taskForceService.baseUrl() + 'assets/images/';

  async ngOnInit() {
    let img = [
      '001-farmer.svg',
      '002-artist.svg',
      '003-captain.svg',
      '004-nurse.svg',
      '005-clown.svg',
      '006-doctor.svg',
      '007-detective.svg',
      '008-maid.svg',
      '009-student.svg',
      '010-mechanic.svg',
      '011-judge.svg',
      '012-wrestling.svg',
      '013-mafia.svg',
      '014-military.svg',
      '015-diver.svg',
      '016-taxi-driver.svg',
      '017-surgeon.svg',
      '018-thief.svg',
      '019-hacker.svg',
      '020-web.svg',
      '021-lumberjack.svg',
      '022-basketball-player.svg',
      '023-athlete.svg',
      '024-postman.svg',
      '025-priest.svg',
      '026-hunter.svg',
      '027-sailor.svg',
      '028-welder.svg',
      '029-nun.svg',
      '030-soldier.svg',
      '031-air-hostess.svg',
      '032-guide.svg',
      '033-courier.svg',
      '034-racer.svg',
      '035-astronaut.svg',
      '036-butler.svg',
      '037-engineer.svg',
      '038-cooker.svg',
      '039-chef.svg',
      '040-waiter.svg',
      '041-photographer.svg',
      '042-singer.svg',
      '043-teacher.svg',
      '044-scientist.svg',
      '045-police.svg',
      '046-telemarketer.svg',
      '047-secretary.svg',
      '048-office-worker.svg',
      '049-firefighter.svg',
      '050-pilot.svg',
    ];

    this.nickJogador = '';
    this.imagemBox = img[Math.floor(Math.random() * img.length)];
    setInterval(() => {
      this.imagemBox = img[Math.floor(Math.random() * img.length)];
    }, 4000);
    this.acessarCarrossel(0);
  }

  acessarCarrossel(num: number) {
    clearInterval(this.intervaloCarrossel);
    this.numCarrossel = num;
    this.intervaloCarrossel = setInterval(() => {
      this.numCarrossel = num++ % 5;
    }, 5000);
  }

  onKey(event) {
    this.nickJogador = event.target.value;
    this.mensagem = '';
  }

  criarSala() {
    if (this.nickJogador === '') {
      this.mensagem = 'O nick não pode estar vazio';
      return;
    }
    
    this.keySala = this.taskForceService.criarSala();
    this.entrarSala();
  }

  async entrarSala() {
    this.mensagem = '';

    if (this.nickJogador === '') {
      this.mensagem = 'O nick não pode estar vazio';
      return;
    }

    if (!(await this.taskForceService.checarExistenciaSala(this.keySala))) {
      this.mensagem = 'Esta sala não existe mais';
      return;
    }

    if (!(await this.taskForceService.checarPrivacidadeSala(this.keySala))) {
      this.mensagem = 'A sala está trancada';
      return;
    }

    if (!(await this.taskForceService.checarStatusSala(this.keySala))) {
      this.mensagem = 'A sala em partida, aguarde';
      return;
    }

    if (
      !(await this.taskForceService.checarNick(this.keySala, this.nickJogador))
    ) {
      this.mensagem = 'O nick já está em uso';
      return;
    }

    this.keySalaChange.emit(this.keySala);
    this.nickJogadorChange.emit(this.nickJogador);
    this.router.navigate(['/' + this.keySala]);
  }
}
