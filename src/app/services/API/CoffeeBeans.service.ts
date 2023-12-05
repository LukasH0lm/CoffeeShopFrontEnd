import { Injectable } from '@angular/core';
import {CoffeeBeansModel} from "../../models/CoffeeBeans.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class CoffeeBeansService {

  private baseUrl = "http://localhost:5196/api/CoffeeBeans";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private coffeeBeans: CoffeeBeansModel[] = [

  ];



  getCoffeeBeans(): CoffeeBeansModel[] {
    return this.coffeeBeans;
  }

  getCoffeeCupById(id: number) {
    return this.coffeeBeans.find((coffeeBeans) => coffeeBeans.ItemId === id);
  }


}
