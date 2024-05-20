import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
declare var bootstrap: any;

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  selectedRecipe!:Recipe;

  openModalDetails(recipe:Recipe){
    this.selectedRecipe = recipe;
    const modalElement = document.getElementById('recipreDetailsModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }
}
