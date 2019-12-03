import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  verifierForm;
  achats;
  pTotal;
  constructor(private panierService: PanierService,private form:FormBuilder) {
  
   }

  ngOnInit() {
    this.achats = this.panierService.getAchats();
    this.pTotal = this.panierService.pTotal;
    this.verifierForm =  this.form.group({
    nom:'',
    adresse:''
  });
  }
 

  onSubmit(infoClient){
    window.alert("NOM: "+infoClient.nom+" adresse: "+infoClient.adresse);
    this.panierService.viderPanier();
    this.verifierForm.reset();
  }

  


}
