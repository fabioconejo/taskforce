import { animate, style, transition, trigger } from '@angular/animations';
import { Meta } from '@angular/platform-browser';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {
    this.meta.addTag({
      name: 'viewport',
      content:
        'height=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
    });
  }

  keySala: string; // = '8c1ev';
  nickJogador: string; // = 'Fabolas';

  ngOnInit() {}
}
