import { Injectable } from '@angular/core';
import {CoffeeCupsModel} from "../../models/CoffeeCups.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";




@Injectable({
  providedIn: 'root',
})
export class CoffeeCupsService {

  private baseUrl = "http://localhost:5196/api";

  private coffeeCups = this.http.get<CoffeeCupsModel[]>(this.baseUrl + "/CoffeeCup");

  constructor(private http: HttpClient) { }


  getCoffeeCups() {
    return this.coffeeCups;
  }


  getCoffeeCupsByStore(storeId: string | undefined): Observable<CoffeeCupsModel[]> {
    return this.getCoffeeCups().pipe(
      map(coffeeCups => {
        if (storeId === undefined) {
          console.log("No storeId");
          return []; // return nothing if no storeId
        }
        return coffeeCups.filter(coffeeCup => coffeeCup.storeIds !== undefined && coffeeCup.storeIds.includes(storeId));
      })
    );
  }


  getCoffeeCupByName(name: string) {

    return this.coffeeCups.pipe(
      map(coffeeCups => coffeeCups.find(coffeeCup => coffeeCup.name === name))
    );
  }


}
