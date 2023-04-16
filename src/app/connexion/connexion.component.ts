import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/app.service.data';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponent implements OnInit {
  title: string='Connexion';
  lblMdp: string="Mot de passe";
  titre:string="connexion";
  login : string="";
  mdp : string="";
  msgerror : string="";
  estCache : boolean =true;
  lblmessage: string="";
  visiteur:any;
  errorMessage: any;

 
  constructor(private router: Router,private dataService:DataService) { }

  ngOnInit(): void {
  }

  valider():void{
    this.dataService.connexion(this.login,this.mdp).subscribe({
      next :(data)=>{
        this.router.navigate(['/accueil']);},

      error: (error)=>{this.estCache = false;
        this.errorMessage ="Une erreur à eu lieu";
      }

    });
  }
}
