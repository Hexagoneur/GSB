import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../services/app.service.data';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
@Injectable({
  providedIn : 'root'
})
export class MedecinsComponent  implements OnInit{
   legende : string = "Rechercher le médecin";
   estCacheMenu : Boolean = false;
   nomMedecin : any;
   medecin : any;
   lesMedecins: Array<any> = new Array;
   lesRapports : Array<any>= new Array;
   afficherRapports : boolean = false;
   afficherMedecin : boolean = false;
   afficherMessage : boolean = false;
   lblMessage="";
   majMedecin:any;
   departement:any;
   

   idMedecin : any;
   date:any;
   motif:any;
   bilan:any;
   nomvisiteur:any;
   afficherListe:any;


constructor( private dataService : DataService){}
  ngOnInit(): void {
  }

charger(){
  this.dataService.chargerMedecins(this.nomMedecin).subscribe({
    next: (data)=>{
      this.lesMedecins = data;

    },
    error : (error)=>{
      console.log(error);
    }
  })
}

selectionner(med:any):void {
  this.medecin=med
  this.idMedecin=med.id;  
  this.nomMedecin = med.nom + " " + med.prenom + "; dep : " + med.departement;
 this.charger();
 this.legende ="";
  this.afficherRapports = true;
  this.estCacheMenu = false;
}

derniersRapports(){
  this.dataService.chargerRapports(this.idMedecin).subscribe({
    next: (data) => {
      this.lesRapports=Array.of(data);
      this.afficherRapports = true;
    },
  
  error: (error) => {
    console.log(error);
  }
})

}
}