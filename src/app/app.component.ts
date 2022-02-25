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

    this.meta.addTag({ property: 'og:title', content: 'Squad Task' });
    this.meta.addTag({
      property: 'og:description',
      content: 'Junte a galera e jogue online agora mesmo',
    });
    this.meta.addTag({
      property: 'og:image',
      content:
        'https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/taskforce-print.png',
    });
    this.meta.addTag({
      name: 'theme-color',
      content: getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-color')
        .trim(),
    });
    this.titleService.setTitle('Squad Task');
  }

  keySala: string;
  nickJogador: string;

  ngOnInit() {}
}