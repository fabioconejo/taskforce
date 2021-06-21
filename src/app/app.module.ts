import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BotaoComponent } from './botao/botao.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    InicioComponent,
    BotaoComponent,
    TarefaComponent,
    PainelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
