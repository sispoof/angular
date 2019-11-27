import { Component } from '@angular/core';

import { produits } from '../produits';

@Component({
  selector: 'app-product-list',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent {
  produits = produits;

  share() {
    window.alert('Le produit a été partagé!');
  }

  onNotify() {
    window.alert('Vous serez alertés dès que ce produit sera en promotion');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
