import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] =[
    new Recipe('PASTA','Pasta ’Ncasciata (Sicilian Baked Pasta)','assets/images/products/product5.jpg'),
    new Recipe('CHEESECAKE','Pumpkin Cheesecake With GingersnapCrust','assets/images/products/product1.jpg'),
    new Recipe('SALAD','Italiano Salad Mixed With Avocado Recipe','assets/images/products/product6.jpg'),
    new Recipe('TOASTCAKE','Easy Basic Pancakes Or Toastcake','assets/images/products/product2.jpg'),
    new Recipe('Juice','Blueberry Juice with Lemon Crema','assets/images/products/product3.jpg'),
  ]

  onOpenModal(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
