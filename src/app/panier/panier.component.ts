import { Component, OnInit } from '@angular/core';

import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  achats;
  prix_t;
  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.achats = this.panierService.getAchats();
    this.prix_t = this.panierService.getTotal();
  }

}
