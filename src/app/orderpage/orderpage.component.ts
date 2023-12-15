import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import {BasketService} from "../services/basket.service";
import {BasketItemModel} from "../models/basketItem.model";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {OrdersService} from "../services/API/Orders.service";
import {OrdersModel} from "../models/Orders.model";
import {CurrentUserService} from "../services/currentUser.service";
import {CookiesService} from "../services/cookies.service";

@Component({
  selector: 'app-orderpage',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './orderpage.component.html',
  styleUrl: './orderpage.component.css'
})
export class OrderpageComponent implements OnInit{
  companyName: string;
  orderItems: BasketItemModel | any;
  completedOrder: OrdersModel = {
    storeId: "",
    userId: "",
    totalAmount: 0,
    orderDetails: []
  };

  constructor(private route: ActivatedRoute, private basketService: BasketService, private ordersService: OrdersService, private currentUser: CurrentUserService, private cookiesService : CookiesService) {
    this.companyName = this.route.snapshot.params['companyName'];
    this.orderItems = this.basketService.getItems();
  }




  completeOrder() {

    this.completedOrder.storeId = "f1fa1b7f-1d30-4736-a91e-d736b40df6e1";
    console.log("storeid", this.completedOrder.storeId)
    this.completedOrder.userId = <string>this.currentUser.getCurrentUser()?.userId;
    this.completedOrder.totalAmount = this.basketService.getTotal();
    this.completedOrder.orderDetails = this.orderItems.map((item: BasketItemModel) => {
      return {
        itemId: item.item.itemId,
        quantity: item.quantity,
        subtotal: item.subTotal
      }
    });

    console.log("completedOrder: ", this.completedOrder)
    this.basketService.clearCart();




    this.ordersService.postOrder(this.completedOrder)
      .subscribe((response) => {
    console.log("response: ", response)

  });




  }

  ngOnInit(): void {
    this.orderItems = this.basketService.getItems();
    console.log("orderItems: ", this.orderItems)
  }
}



