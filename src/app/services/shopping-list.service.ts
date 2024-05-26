import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/models/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients:Ingredients[]=[
    new Ingredients('Pizza',20),
    new Ingredients('Apple',25),
    new Ingredients('Pasta',27)
  ];
  // ingredientsAdded=new EventEmitter<Ingredients>();
  constructor() { }
  getIngredients(){
    return this.ingredients;
  }
  addIngredient(ingredient:Ingredients){
    this.ingredients.push(ingredient)
  }
  addIngredients(ingredients:Ingredients[]){
    this.ingredients.push(...ingredients);
  }
}
