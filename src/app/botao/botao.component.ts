import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() corFundo: String;
  @Input() corFonte: String;
}
