import {Injectable} from '@angular/core';
import {CookiesService} from "./cookies.service";
import {ItemModel} from "../models/Item.model";
import {BasketItemModel} from "../models/basketItem.model";



@Injectable({
  providedIn: 'root',
})
export class BasketService {

  private basket: BasketItemModel[] = [];




  constructor(private cookiesService: CookiesService) {
    this.loadBasketData();
  }

  loadBasketData(): void {

    const basket = this.cookiesService.getCookie('basket');


    if (basket) {

      this.basket = JSON.parse(basket);
    }
  }


  addToCart(currentItem: ItemModel): void {


    const existingItem = this.basket.find((item) => item.item.itemId === currentItem.itemId);

    if (existingItem) {
      console.log('Item already exists in the basket:', existingItem);
      existingItem.quantity++;
    } else {
      console.log('Item not in the basket. Adding:', currentItem);
      this.basket.push({ item: currentItem, quantity: 1 });
    }

    this.cookiesService.setCookie('basket', JSON.stringify(this.basket));
    console.log('Updated basket:', this.basket);

  }





  getItems(): BasketItemModel[] {
    return this.basket;
  }

  clearCart(): void {
    this.basket = [];
    this.cookiesService.setCookie('basket', JSON.stringify(this.basket));
  }


  removeItem(item: BasketItemModel): void {

    const existingItemIndex = this.basket.findIndex((basketItem) => basketItem === item);


    const existingItem = this.basket.find((basketItem) => basketItem === item);

    if (existingItem) {
      console.log('Item already exists in the basket:', existingItem);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        //Remove item from basket
        this.basket.splice(existingItemIndex, 1);
        console.log('Item removed from basket:', existingItem);

      }
    }else {
      console.log('Item not in the basket');
    }


    this.cookiesService.setCookie('basket', JSON.stringify(this.basket));
    console.log('Updated basket:', this.basket);

  }



}
