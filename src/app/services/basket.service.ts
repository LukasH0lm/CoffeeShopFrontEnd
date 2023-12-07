import {Injectable} from '@angular/core';
import { Coffee } from '../models/coffee.model';
import {CookiesService} from "./cookies.service";


@Injectable({
  providedIn: 'root',
})
export class BasketService {

  private items: Coffee[] = [];


  constructor(private cookiesService: CookiesService) {
    this.loadBasketData();
  }
// Check evt routing, for at se hvilken forretning der er valgt, og gem en kurv for hver forretning.
  // Dette skal først gøres efter valg af forretning. For home og det der kommer før, skal det bare være den seneste kurv der vises.
  loadBasketData(): void {
    const basket = this.cookiesService.getCookie('basket');
    if (basket) {
      this.items = JSON.parse(basket);
    }
  }




  addToCart(coffee: Coffee | undefined): void {
    if (coffee) {

      coffee.ingredients = coffee.ingredients.filter(ingredient => ingredient.checked);

      this.items.push(coffee);

      this.cookiesService.setCookie('basket', JSON.stringify(this.items));

      console.log(this.items);



    }
  }

  getItems(): Coffee[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
    this.cookiesService.setCookie('basket', JSON.stringify(this.items));
  }


  removeItem(coffee: Coffee): void {
    // Skal nok være på et guid den tjekker her, ellers sletter den bare alle med det navn i kurven
    this.items = this.items.filter((item) => item.name !== coffee.name);
    this.cookiesService.setCookie('basket', JSON.stringify(this.items));
  }

}
