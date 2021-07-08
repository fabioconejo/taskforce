import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { PainelComponent } from './painel/painel.component';
import { SalaComponent } from './sala/sala.component';

const routes: Routes = [
  { path: 'sala', component: SalaComponent },
  { path: 'painel', component: PainelComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
