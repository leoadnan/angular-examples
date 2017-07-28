import { NgModule } from '@angular/core';
import {HeaderComponent} from "app/core/header/header.component";
import {HomeComponent} from "app/core/home/home.component";
import {AppRoutingModule} from "app/app-routing.module";
import {SharedModule} from "app/shared/shared.module";
import {ShoppingListService} from "app/shopping-list/shopping-list.service";
import {RecipeService} from "app/recipes/recipe.service";
import {DataStorageService} from "app/shared/data-storage.service";
import {AuthService} from "app/auth/auth.service";

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    HomeComponent
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    DataStorageService, 
    AuthService
  ]
})
export class CoreModule { }
