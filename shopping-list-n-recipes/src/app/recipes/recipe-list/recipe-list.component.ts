import { Component, OnInit } from '@angular/core';
import {Recipe} from 'app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe','This is a simple test','http://maxpixel.freegreatpicture.com/static/photo/2x/Fillet-Of-Heidschnucke-Eat-Recipe-Fillet-Meat-601666.jpg'),
    new Recipe('A test recipe','This is a simple test','http://maxpixel.freegreatpicture.com/static/photo/2x/Fillet-Of-Heidschnucke-Eat-Recipe-Fillet-Meat-601666.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
