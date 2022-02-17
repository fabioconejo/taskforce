import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { PainelComponent } from './painel/painel.component';
import { MonitorComponent } from './monitor/monitor.component';
import { QuadroComponent } from './quadro/quadro.component';
import { CentralComponent } from './central/central.component';
import { TaskforceService } from './taskforce.service';
import { SalaComponent } from './sala/sala.component';
import { ContagemComponent } from './contagem/contagem.component';
import { InicioComponent } from './inicio/inicio.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    BotaoComponent,
    TarefaComponent,
    PainelComponent,
    MonitorComponent,
    QuadroComponent,
    CentralComponent,
    SalaComponent,
    ContagemComponent,
    InicioComponent,
    RelatorioComponent
  ],
  bootstrap: [AppComponent],
  providers: [TaskforceService]
})
export class AppModule {}
