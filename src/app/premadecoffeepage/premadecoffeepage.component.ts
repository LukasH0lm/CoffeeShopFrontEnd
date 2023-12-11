import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CurrentCoffeeService} from "../services/currentcoffee.service";
import {BasketService} from "../services/basket.service";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {CoffeeCupsModel} from "../models/CoffeeCups.model";
import {Observable, of, switchMap} from "rxjs";
import {IngredientsService} from "../services/API/Ingredients.service";
import {CoffeeCupIngredientsModel} from "../models/CoffeeCupIngredients.model";
import {IngredientsModel} from "../models/Ingredients.model";
import {CoffeeCupIngredientsService} from "../services/API/CoffeeCupIngredients.service";


@Component({
  selector: 'app-premadecoffeepage',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCheckboxModule, FormsModule],
  templateUrl: './premadecoffeepage.component.html',
  styleUrl: './premadecoffeepage.component.css'
})
export class PremadecoffeepageComponent {

  coffeeCup: Observable<CoffeeCupsModel | undefined> | undefined;
  coffeeCupIngredients: Observable<CoffeeCupIngredientsModel[]> | undefined;


  constructor(private currentCoffeeService: CurrentCoffeeService, private coffeeCupIngredientsService: CoffeeCupIngredientsService, private basketService: BasketService, private route: ActivatedRoute) {

    const routingCoffeeName = this.route.snapshot.params['coffeeName'];

    if (this.currentCoffeeService.getCurrentCoffee() === undefined) {
      this.currentCoffeeService.setCurrentCoffeeByName(routingCoffeeName);
    }

    this.coffeeCup = this.currentCoffeeService.getCurrentCoffee();



    this.coffeeCupIngredients = this.coffeeCup?.pipe(
      switchMap(coffeeCup => {
        if (coffeeCup && coffeeCup.itemId) {
          console.log("Coffee cup ingredients found");
          return this.coffeeCupIngredientsService.getIngredientsByCoffeeCupId(coffeeCup.itemId);
        } else {
          console.log("No coffee cup ingredients found");
          return of([]);
        }
      })
    ) || of([]);
  }



  addToCart(cup?: CoffeeCupsModel): void {
    if (cup) {
      this.basketService.addToCart(cup);
    } else {
      console.error('Trying to add undefined cup to the cart.' + cup);
    }
  }
}
