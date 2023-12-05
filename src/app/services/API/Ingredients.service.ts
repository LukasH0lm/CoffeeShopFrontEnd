import { Injectable } from '@angular/core';
import {IngredientsModel} from "../../models/Ingredients.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class IngredientsService {

  private baseUrl = "http://localhost:5196/api/Ingredients";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private ingredients: IngredientsModel[] = [

  ];



  getIngredients(): IngredientsModel[] {
    return this.ingredients;
  }

  getIngredientById(id: number) {
    return this.ingredients.find((ingredients) => ingredients.IngredientId === id);
  }


}
