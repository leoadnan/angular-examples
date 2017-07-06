import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "app/recipes/recipe.model";
import {Ingredient} from "app/shared/ingredients.model";
import {ShoppingListService} from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe-1',
      'This is a simple test',
      'http://maxpixel.freegreatpicture.com/static/photo/2x/Fillet-Of-Heidschnucke-Eat-Recipe-Fillet-Meat-601666.jpg',
      [new Ingredient("Ingredient-1",1),
      new Ingredient("Ingredient-2",2),]
    ),
    new Recipe(
      'A test recipe-2',
      'This is a simple test',
      'http://maxpixel.freegreatpicture.com/static/photo/2x/Fillet-Of-Heidschnucke-Eat-Recipe-Fillet-Meat-601666.jpg',
      [new Ingredient("Ingredient-1",1),
      new Ingredient("Ingredient-2",2),])
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() : Recipe[]{
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIntgredients(ingredients);
  }
}
