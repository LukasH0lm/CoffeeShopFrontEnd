import {Injectable} from '@angular/core';
import {CookiesService} from "./cookies.service";
import {Observable} from "rxjs";
import {CoffeeCupsModel} from "../models/CoffeeCups.model";
import {ItemModel} from "../models/Item.model";


@Injectable({
  providedIn: 'root',
})
export class BasketService {

  private items: ItemModel[] = [];




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


  addToCart(coffeeCup: CoffeeCupsModel): void {
    if (coffeeCup) {

      this.items.push(coffeeCup);

      this.cookiesService.setCookie('basket', JSON.stringify(this.items));

      console.log(this.items);

    }
  }

  getItems(): ItemModel[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
    this.cookiesService.setCookie('basket', JSON.stringify(this.items));
  }


  removeItem(items: ItemModel): void {
    // Skal nok være på et guid den tjekker her, ellers sletter den bare alle med det navn i kurven
    this.items = this.items.filter((item) => item.name !== item.name);
    this.cookiesService.setCookie('basket', JSON.stringify(this.items));
  }

}
