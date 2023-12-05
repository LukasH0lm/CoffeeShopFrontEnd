import { Injectable } from '@angular/core';
import {CoffeeCupIngredientsModel} from "../../models/CoffeeCupIngredients.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class CoffeeCupIngredientsService {

  private baseUrl = "http://localhost:5196/api/CoffeeCupIngredients";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private coffeeCupIngredients: CoffeeCupIngredientsModel[] = [

  ];



  getCoffeeCupIngredients(): CoffeeCupIngredientsModel[] {
    return this.coffeeCupIngredients;
  }

  getCoffeeCupIngredientsById(id: number) {
    return this.coffeeCupIngredients.find((coffeeCupIngredients) => coffeeCupIngredients.CoffeeCupId === id);
  }


}
