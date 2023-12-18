
import { Injectable } from '@angular/core';
import {CoffeeCupsModel} from "../models/CoffeeCups.model";
import {CoffeeCupsService} from "./API/CoffeeCups.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CurrentCoffeeService {

  currentCoffee: Observable<CoffeeCupsModel | undefined> | undefined;

  constructor(private coffeeCupsService: CoffeeCupsService) {

  }

  setCurrentCoffeeByName(name: string): void {
    const selectedCoffee = this.coffeeCupsService.getCoffeeCupByName(name);

    if (selectedCoffee) {
      this.currentCoffee = selectedCoffee;
    }

  }








  getCurrentCoffee() {
    return this.currentCoffee;

  }

}
