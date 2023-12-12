import { Injectable } from '@angular/core';
import {CoffeeCupsModel} from "../../models/CoffeeCups.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {StoresModel} from "../../models/Stores.model";
import {Coffee} from "../../models/coffee.model";


@Injectable({
  providedIn: 'root',
})
export class CoffeeCupsService {

  private baseUrl = "http://localhost:5196/api";

  private coffeeCups = this.http.get<CoffeeCupsModel[]>(this.baseUrl + "/CoffeeCup");

  private preMadeCoffeeCups = this.getCoffeeCups().pipe(
    map(coffeeCups => coffeeCups.filter(coffeeCup =>
      coffeeCup.customerId === "00000000-0000-0000-0000-000000000000"))
  );

  constructor(private http: HttpClient) { }


  getCoffeeCups() {
    return this.coffeeCups;
  }

  getPreMadeCoffeeCups() {
    return this.preMadeCoffeeCups;
  }

  getPreMadeCoffeeCupsByStore(storeId: string | undefined): Observable<CoffeeCupsModel[]> {
    return this.getPreMadeCoffeeCups().pipe(
      map(coffeeCups => coffeeCups.filter(coffeeCup => coffeeCup.storeId === storeId))
    );
  }


  getCoffeeCupByName(name: string) {

    return this.coffeeCups.pipe(
      map(coffeeCups => coffeeCups.find(coffeeCup => coffeeCup.name === name))
    );
  }


}
