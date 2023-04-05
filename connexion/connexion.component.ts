import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  title: string='Connexion';
  login : any;
  password : any;
  msgerror! : string;
  estCache : boolean =true;

  constructor() { }

  ngOnInit(): void {
  }

  valider():void{
    if(this.login !=("toto")|| this.password !=("titi"))
      console.log;
    else
     console.log("erreur");
     this.estCache =false;
     this.msgerror="Mauvais identifiant ou mot de passe";
     
  }
}
