import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { MedecinsComponent } from 'src/app/medecins/medecins.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { VisitesComponent } from 'src/app/visites/visites.component';
import { DataService } from 'src/app/services/app.service.data';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MedecinsComponent,
    NavbarComponent,
    VisitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }