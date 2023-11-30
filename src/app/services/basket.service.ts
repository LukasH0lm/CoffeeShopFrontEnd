import { Injectable } from '@angular/core';
import { Coffee } from '../coffeeselectionpage/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private items: Coffee[] = [];

  addToCart(coffee: Coffee | undefined): void {
    if (coffee) {
      this.items.push(coffee);
    }
  }

  getItems(): Coffee[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

  removeItem(coffee: Coffee): void {
    this.items = this.items.filter((item) => item.name !== coffee.name);
  }

}
