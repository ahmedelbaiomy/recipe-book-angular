import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService:RecipeService) {

  }
  setRecipeSelected(recipe:Recipe){
    this.recipeService.setRecipe(recipe);
  }
}
