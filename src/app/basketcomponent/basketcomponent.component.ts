import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasketService} from "../services/basket.service";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CookiesService} from "../services/cookies.service";
import {ItemModel} from "../models/Item.model";
import {BasketItemModel} from "../models/basketItem.model";


@Component({
  selector: 'app-basketcomponent',
  standalone: true,
    imports: [CommonModule, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle, MatButtonModule, MatIconModule],
  templateUrl: './basketcomponent.component.html',
  styleUrl: './basketcomponent.component.css'
})
export class BasketcomponentComponent {

  constructor(private basketService: BasketService, private cookiesService: CookiesService) {}


  items = this.basketService.getItems();

  clearCart(): void {
    this.basketService.clearCart();
    this.items = this.basketService.getItems();


  }

  removeItem(item: BasketItemModel): void {
    this.basketService.removeItem(item);
    this.items = this.basketService.getItems();
  }

}
