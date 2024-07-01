import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredients } from '../../shared/models/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
  constructor(private shoppingListService:ShoppingListService){
  }


  subscription!:Subscription;
  editMode:boolean=false;
  editedItemIndex!:number;
  editedItem!:Ingredients;

  @ViewChild('f',{static:true}) shoppingListForm!:NgForm;
  ngOnInit(): void {
   this.subscription = this.shoppingListService.startedEditing.subscribe((index:number)=>{
    this.editedItemIndex=index;
    this.editMode=true;
    this.editedItem=this.shoppingListService.getIngredientByIndex(index);

    this.shoppingListForm.setValue({
      name:this.editedItem.name,
      amount:this.editedItem.amount
    })
   })
  }
  onAddItem(form:NgForm){
    const value=form.value;
    const newIngredient=new Ingredients(value.name,value.amount);
   if(this.editMode){
    this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
   }else{
    this.shoppingListService.addIngredient(newIngredient);
   }
   this.editMode=false;
   form.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear()
  }
  onClear(){
    this.shoppingListForm.reset();
    this.editMode=false;
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}
