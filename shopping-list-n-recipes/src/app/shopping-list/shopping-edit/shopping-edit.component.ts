import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredients.model'
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
@Component({selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(nameInput: HTMLInputElement){    
    this.shoppingListService.addIngredient(new  Ingredient(nameInput.value, this.amountInput.nativeElement.value));
  }
}
