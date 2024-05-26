import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipe.service';
declare var bootstrap: any;

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  selectedRecipe!:Recipe;

  constructor(private recipeService:RecipeService){

  }
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
        this.selectedRecipe=recipe;
        this.openModalDetails(recipe);
    })
  }

  openModalDetails(recipe:Recipe){
    const modalElement = document.getElementById('recipreDetailsModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }
}
