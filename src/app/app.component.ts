import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-CPWCCRF4JQ', {
          page_path: event.urlAfterRedirects,
        });
      }
    });

    this.meta.addTag({
      name: 'theme-color',
      content: getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-color')
        .trim(),
    });
  }

  keySala: string;
  nickJogador: string;

  ngOnInit() {}
}