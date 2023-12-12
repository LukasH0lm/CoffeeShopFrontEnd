import { Injectable } from '@angular/core';
import {IngredientsModel} from "../../models/Ingredients.model";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {CoffeeCupsModel} from "../../models/CoffeeCups.model";


@Injectable({
  providedIn: 'root',
})
export class IngredientsService {


  private baseUrl = "http://localhost:5196/api";

  private ingredients = this.http.get<IngredientsModel[]>(this.baseUrl + "/Ingredient");

  currentCoffee: Observable<CoffeeCupsModel | undefined> | undefined;
  constructor(private http: HttpClient) { }



  getIngredients() {
    return this.ingredients;
  }





}
