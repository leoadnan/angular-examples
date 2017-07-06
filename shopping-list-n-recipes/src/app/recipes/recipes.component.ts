import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from "app/recipes/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private receipeService: RecipeService) { }

  ngOnInit() {
    this.receipeService.selectedRecipe.subscribe((recipe:Recipe)=> {
      this.selectedRecipe = recipe;
    });
  }

}
