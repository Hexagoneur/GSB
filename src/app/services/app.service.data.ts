import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class DataService {
  private urlAPI = "http://localhost/restGSB"; //URL de l'API

  constructor(private http: HttpClient) {}

  // Fonction de connexion d'un utilisateur
  public connexion(login: string, mdp: string) {
    let url = this.urlAPI + "/connexion?login=" + login + "&mdp=" + mdp; // URL pour appeler la fonction de connexion de l'API
    let req = this.http.get<string>(url); // Appel à l'API avec une requête HTTP de type GET
    console.log(url); // Affichage de l'URL appelée dans la console
    return req; // Retourne la réponse de l'API sous forme d'un Observable de type string
  }

  // Fonction pour charger les médecins en fonction d'un nom
  public chargerMedecins(nomMedecin: string) {
    let url = this.urlAPI + "/medecins?nom=" + nomMedecin; // URL pour appeler la fonction de chargement des médecins de l'API
    let req = this.http.get<Array<any>>(url); // Appel à l'API avec une requête HTTP de type GET
    return req; // Retourne la réponse de l'API sous forme d'un Observable de type tableau de n'importe quel type
  }

  // Fonction pour charger les rapports en fonction de l'id du médecin
  public chargerRapports(idMedecin: any) {
    let url = this.urlAPI + "/rapport/" + idMedecin; // URL pour appeler la fonction de chargement des rapports de l'API
    let req = this.http.get<Array<any>>(url); // Appel à l'API avec une requête HTTP de type GET
    return req; // Retourne la réponse de l'API sous forme d'un Observable de type tableau de n'importe quel type
  }

  // Fonction pour mettre à jour les informations d'un médecin
  public majMedecin(id: string, adresse: string, tel: string, spe: string): Observable<any> {
    const body = { // Création d'un objet qui contient les informations à mettre à jour
      id: id,
      adresse: adresse,
      tel: tel,
      specialite: spe,
    };
    let url: string = this.urlAPI + "/majMedecin"; // URL pour appeler la fonction de mise à jour des informations d'un médecin de l'API
    let req = this.http.put<Array<any>>(url, body); // Appel à l'API avec une requête HTTP de type PUT pour mettre à jour les informations d'un médecin
    return req; // Retourne la réponse de l'API sous forme d'un Observable de n'importe quel type
  }
}
