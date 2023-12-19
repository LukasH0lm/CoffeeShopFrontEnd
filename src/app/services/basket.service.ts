import {Injectable} from '@angular/core';
import {CookiesService} from "./cookies.service";
import {ItemModel} from "../models/Item.model";
import {BasketItemModel} from "../models/basketItem.model";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class BasketService {

  private basket: BasketItemModel[] = [];


  private totalPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  totalPrice: Observable<number> = this.totalPriceSubject.asObservable();


  constructor(private cookiesService: CookiesService) {

  }


  loadBasketData() {
    const basketCookie = this.cookiesService.getCookie("basketCookie");

    if (basketCookie) {
      this.basket = JSON.parse(basketCookie);
      console.log("Basket cookie found:", this.basket)
    } else {
      console.log("No basket cookie found55")
    }

    this.updateTotalPrice();
  }


  updateTotalPrice() {
    this.totalPriceSubject.next(this.getTotal());
  }


  getTotal(): number {
    let total = 0;
    this.basket.forEach((item) => {
      total += item.subTotal;
    });
    return total;
  }

  addToCart(currentItem: ItemModel): void {


    const existingItem = this.basket.find((item) => item.item.itemId === currentItem.itemId);

    if (existingItem) {
      console.log('Item already exists in the basket:', existingItem);
      existingItem.quantity++;
      existingItem.subTotal = existingItem.quantity * currentItem.price;
    } else {
      console.log('Item not in the basket. Adding:', currentItem);
      this.basket.push({item: currentItem, quantity: 1, subTotal: currentItem.price});
    }


    this.cookiesService.setCookieForSevenDays('basketCookie', JSON.stringify(this.basket));
    this.updateTotalPrice()
    console.log('Updated basket:', this.basket);


  }


  getItems(): BasketItemModel[] {
    return this.basket;
  }

  clearCart(): void {

    this.basket = [];
    this.totalPriceSubject.next(0);
    this.cookiesService.setCookieForSevenDays('basketCookie', JSON.stringify(this.basket))


  }


  removeItem(item: BasketItemModel): void {

    const existingItemIndex = this.basket.findIndex((basketItem) => basketItem.item.itemId === item.item.itemId);


    const existingItem = this.basket.find((basketItem) => basketItem.item.itemId === item.item.itemId);

    if (existingItem) {
      console.log('Item already exists in the basket:', existingItem);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.subTotal = existingItem.quantity * item.item.price;
      } else {
        //Remove item from basket
        this.basket.splice(existingItemIndex, 1);
        console.log('Item removed from basket:', existingItem);

      }
    } else {
      console.log('Item not in the basket');
    }


    this.cookiesService.setCookieForSevenDays('basketCookie', JSON.stringify(this.basket));
    console.log('Updated basket:', this.basket);

  }


}
