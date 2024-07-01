import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/models/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',

})
export class ShoppingListComponent implements OnInit{
  ingredients:Ingredients[]=[];

  constructor(private shoppingListService:ShoppingListService){
  }
  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
  }

  onEdit(index:number){
    this.shoppingListService.startedEditing.next(index);
  }
}
