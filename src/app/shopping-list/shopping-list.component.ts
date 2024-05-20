import { Component } from '@angular/core';
import { Ingredients } from '../shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  
})
export class ShoppingListComponent {
  ingredients:Ingredients[]=[
    new Ingredients('Pizza',20),
    new Ingredients('Apple',25),
    new Ingredients('Pasta',27)
  ];

}
