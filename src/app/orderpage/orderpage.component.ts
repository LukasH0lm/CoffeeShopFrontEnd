import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import {BasketService} from "../services/basket.service";
import {BasketItemModel} from "../models/basketItem.model";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {OrdersService} from "../services/API/Orders.service";
import {OrdersModel} from "../models/Orders.model";
import {CurrentUserService} from "../services/currentUser.service";
import {CurrentStoreService} from "../services/currentStore.service";

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
  uiTotalPrice: number = 0;

  constructor(private route: ActivatedRoute, private basketService: BasketService, private ordersService: OrdersService,
              private currentUser: CurrentUserService, private currentStoreService: CurrentStoreService,
              private router: Router)
  {

    this.companyName = this.route.snapshot.params['companyName'];
    this.orderItems = this.basketService.getItems();
  }




  completeOrder() {


   if (this.currentUser.getCurrentUser() !== undefined) {
    this.completedOrder.storeId = <string>this.currentStoreService.getCurrentStore()?.storeId;
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


         this.router.navigate(['Home']);

  });
   } else {
     console.log("You need to log in to complete an order!")
     this.router.navigate(['Logind']);



   }




  }

  ngOnInit(): void {
    this.orderItems = this.basketService.getItems();
    console.log("orderItems: ", this.orderItems)

    this.basketService.totalPrice
      .subscribe((totalPrice: number) => {
        this.uiTotalPrice = totalPrice;
      });


  }
}



