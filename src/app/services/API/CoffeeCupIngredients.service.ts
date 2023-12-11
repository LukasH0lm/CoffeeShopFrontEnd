import { Injectable } from '@angular/core';
import {CoffeeCupIngredientsModel} from "../../models/CoffeeCupIngredients.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root',
})
export class CoffeeCupIngredientsService {

  private baseUrl = "http://localhost:5196/api";
  constructor(private http: HttpClient) { }



  getIngredientsByCoffeeCupId(id: string | undefined): Observable<CoffeeCupIngredientsModel[]> {


    return this.http.get<CoffeeCupIngredientsModel[]>(this.baseUrl + "/CoffeeCupIngredient" + "/" + id);


  }





}
