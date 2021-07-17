import { Component, OnInit } from '@angular/core';

import { TaskforceService } from '../taskforce.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(private taskForceService: TaskforceService) {}

  imagemBox: string;
  baseUrl = this.taskForceService.baseUrl() + 'assets/images/profissionais/';

  ngOnInit() {
    let img = ['001-farmer.svg', '002-artist.svg'];
    this.imagemBox = img[Math.floor(Math.random() * 2)];
    setInterval(() => {
      this.imagemBox = img[Math.floor(Math.random() * 2)];
    }, 4000);
  }

  alphaOnly(event) {
    var key = event.keyCode;
    return (key >= 65 && key <= 90) || key == 8;
  }
}
