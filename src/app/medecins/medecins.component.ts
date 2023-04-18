import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/app.service.data';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent implements OnInit {
  // Propriétés
  legende = 'Rechercher le médecin';
  estCacheMenu = false;
  nomMedecin: any;
  medecin: any;
  lesMedecins: Array<any> = [];
  lesRapports: Array<any> = [];
  afficherRapports = false;
  afficherMedecin = false;
  afficherMessage = false;
  lblMessage = '';
  departement: any;
  idMedecin: any;
  date: any;
  motif: any;
  bilan: any;
  nomvisiteur: any;
  afficherListe: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  // Charger la liste des médecins correspondants à la recherche
  charger(): void {
    this.dataService.chargerMedecins(this.nomMedecin).subscribe({
      next: (data) => {
        this.lesMedecins = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  // Sélectionner un médecin et afficher ses derniers rapports
  selectionner(med: any): void {
    this.medecin = med;
    this.idMedecin = med.id;
    this.nomMedecin = med.nom + ' ' + med.prenom + '; dep : ' + med.departement;
    this.charger();
    this.legende = '';
    this.afficherRapports = true;
    this.estCacheMenu = false;
  }

  // Charger la liste des derniers rapports pour le médecin sélectionné
  derniersRapports(): void {
    this.dataService.chargerRapports(this.idMedecin).subscribe({
      next: (data) => {
        this.lesRapports = Array.of(data);
        this.afficherRapports = true;
        this.afficherMedecin = false;
        this.afficherMessage = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  // Activer le mode édition pour le médecin sélectionné
  majMedecin(): void {
    this.afficherRapports = false;
    this.afficherMedecin = true;
    this.afficherMessage = false;
  }

  // Enregistrer les modifications sur le médecin sélectionné
  valider(): void {
    this.afficherMessage = true;
    this.dataService
      .majMedecin(
        this.medecin.id,
        this.medecin.adresse,
        this.medecin.tel,
        this.medecin.specialitecomplementaire
      )
      .subscribe(
        (data) => {
          this.lblMessage = 'Enregistrement effectué';
        },
        (error) => {
          this.lblMessage = 'Merci de réessayer plus tard';
          console.log(error);
        }
      );
  }
}
