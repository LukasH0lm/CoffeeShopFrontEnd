import { Injectable } from '@angular/core';
import {CoffeeCupsModel} from "../../models/CoffeeCups.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class CoffeeCupsService {

  private baseUrl = "http://localhost:5196/api/CoffeeCups";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private coffeeCups: CoffeeCupsModel[] = [

  ];



  getCoffeeCups(): CoffeeCupsModel[] {
    return this.coffeeCups;
  }

  getCoffeeCupById(id: number) {
    return this.coffeeCups.find((coffeeCups) => coffeeCups.ItemId === id);
  }


}
