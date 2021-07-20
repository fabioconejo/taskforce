import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  keySala:string;
  nickJogador:string;

  ngOnInit() {}
}
