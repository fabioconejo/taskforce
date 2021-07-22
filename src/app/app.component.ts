import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      state('out', style({ opacity: '0' })),
      state('in', style({ opacity: '1' })),
      transition('* => *', animate('300ms ease'))
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor() {}

  keySala: string;
  nickJogador: string;

  ngOnInit() {}
}
