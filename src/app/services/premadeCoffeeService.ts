import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {

  private coffees: Coffee[] = [];

  getCoffees(): Coffee[] {
    return this.coffees;
  }

  getCoffeeByName(name: string) {
    return this.coffees.find((coffee) => coffee.name === name);
  }


}
