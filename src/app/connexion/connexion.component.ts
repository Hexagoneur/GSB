import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  valider():void{
    if(this.login !=("toto")|| this.password !=("titi")){
      this.router.navigate(["accueil"]);
    }
      
   
    else{
     console.log("erreur");
     this.estCache =false;
     this.msgerror="Mauvais identifiant ou mot de passe";
    }

     
  }
}
