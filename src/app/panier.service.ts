import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  achats = [];

  constructor(private http: HttpClient) { }

  ajouterAuPanier(produit) {
    this.achats.push(produit);
  }

  getAchats() {
    return this.achats;
  }

  viderPanier() {
    this.achats = [];
    return this.achats;
  }

  getFraisLivraison() {
    return this.http.get('/assets/livraison.json');
  }
  getTotal(){
    var prix_t = 0;
    var i = 0;
    for(i=0;i<this.achats.length;i++){
      prix_t=prix_t+this.achats.prix;
    }
    return prix_t;
  }

}
