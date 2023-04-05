import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';

const appRoutes: Routes = [
  {path:'', component: ConnexionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes),BrowserModule,FormsModule],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppRoutingModule { }