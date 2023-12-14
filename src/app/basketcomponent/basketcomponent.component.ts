import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasketService} from "../services/basket.service";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BasketItemModel} from "../models/basketItem.model";


@Component({
  selector: 'app-basketcomponent',
  standalone: true,
    imports: [CommonModule, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle, MatButtonModule, MatIconModule],
  templateUrl: './basketcomponent.component.html',
  styleUrl: './basketcomponent.component.css'
})
export class BasketcomponentComponent implements OnInit{

  constructor(private basketService: BasketService) {}


  items = this.basketService.getItems();

  totalPriceBasket = 0;


  clearCart(): void {
    this.basketService.clearCart();
    this.items = this.basketService.getItems();
    this.basketService.updateTotalPrice();

  }

  removeItem(item: BasketItemModel): void {
    this.basketService.removeItem(item);
    this.items = this.basketService.getItems();
    this.basketService.updateTotalPrice();
  }


  ngOnInit(): void {

    this.basketService.totalPrice
      .subscribe((totalPrice: number) => {
        this.totalPriceBasket = totalPrice;
      });


    // Der nogle bugs med basket
    // Evt subscribe til items her istedet for at gøre det manuelt i denne component
    // Tror det kan give nogle problemer


  }

}
