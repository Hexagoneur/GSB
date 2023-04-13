import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MedecinsComponent } from './medecins/medecins.component';
import { VisitesComponent } from './visites/visites.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MedecinsComponent,
    VisitesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }