
import { Injectable } from '@angular/core';
import { Coffee } from '../coffeeselectionpage/coffee.model';
import { CoffeeService } from '../coffeeService';

@Injectable({
  providedIn: 'root',
})
export class CurrentCoffeeService {

  currentCoffee: Coffee | undefined;

  constructor(private coffeeService: CoffeeService) {

  }

  setCurrentCoffeeByName(name: string): void {
    const selectedCoffee = this.coffeeService.getCoffeeByName(name);

    if (selectedCoffee) {
      this.currentCoffee = selectedCoffee;
    }

  }

  getCurrentCoffee() {
    return this.currentCoffee;

  }

}
