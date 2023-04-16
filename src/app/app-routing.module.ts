import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitesComponent } from './visites/visites.component';

const appRoutes: Routes = [
  { path: '', component: ConnexionComponent },
{ path: 'medecins', component: MedecinsComponent },
{ path: 'visites', component: VisitesComponent },
{ path: 'accueil', component: NavbarComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes),BrowserModule,FormsModule],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppRoutingModule { }