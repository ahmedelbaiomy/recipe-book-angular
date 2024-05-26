import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/models/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput',{static:true}) name!:ElementRef;
  @ViewChild('amountInput',{static:true}) amount!:ElementRef;
  isDisabled: boolean = true;
  constructor(private shoppingListService:ShoppingListService){
  }


  onAddItem(){
    this.shoppingListService.addIngredient({name:this.name.nativeElement.value,amount:this.amount.nativeElement.value});
    this.onClear()
  }

  onValidate() {
    if (this.name.nativeElement.value.trim().length === 0 || this.amount.nativeElement.value.trim().length === 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  onClear(){
    this.name.nativeElement.value='';
    this.amount.nativeElement.value = '';
    this.onValidate();
  }

}
