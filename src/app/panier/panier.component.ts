import { Component, OnInit } from '@angular/core';

import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  achats;
  pTotal;
  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.achats = this.panierService.getAchats();
    this.pTotal = this.panierService.pTotal;
   
  }


}
