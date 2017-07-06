import {Injectable, EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatos ', 10)
  ];

  constructor() {}

  getIngredients() : Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIntgredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
