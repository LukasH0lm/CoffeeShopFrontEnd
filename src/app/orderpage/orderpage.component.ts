import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {interval, switchMap, takeWhile} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-orderpage',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './orderpage.component.html',
  styleUrl: './orderpage.component.css'
})
export class OrderpageComponent implements OnInit {
  companyName: string;
  orderItems: BasketItemModel | any;
  completedOrder: OrdersModel = {
    orderId: "", // håber ikke det her ødelægger noget
    storeId: "",
    userId: "",
    totalAmount: 0,
    orderDetails: []

  };
  uiTotalPrice: number = 0;


  constructor(private route: ActivatedRoute, private basketService: BasketService, private ordersService: OrdersService,
              private currentUser: CurrentUserService, private currentStoreService: CurrentStoreService,
              private router: Router, private snackBar: MatSnackBar) {


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
        .subscribe((response: any) => {
          console.log("response: ", response);

          this.checkOrderStatus(response.orderId);

          this.router.navigate(['Home']);
        });
    } else {
      console.log("You need to log in to complete an order!")
      this.router.navigate(['Logind']);


    }


  }


  orderStatusSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 0, // Hvis den er 0 bliver den åben indtil brugeren lukker den
      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
  }

  checkOrderStatus(orderId: string) {

    interval(5000)
      .pipe(
        switchMap(() => this.ordersService.checkOrder(orderId)),
        takeWhile((isAccepted: boolean) => !isAccepted, true) // Continue until isAccepted is true
      )
      .subscribe(
        (isAccepted: boolean) => {
          if (isAccepted) {
            this.orderStatusSnackBar("Din ordre er blevet accepteret, og kan afhentes til det valgte tidspunkt");
          } else {
            this.orderStatusSnackBar("Din ordre afventer bekræftelse...");
          }
        },
        (error) => {
          if (error.status === 404) {
            this.orderStatusSnackBar("Din ordre kunne ikke laves til det ønskede tidspunkt. Bestil til et senere tidspunkt");
          } else {
            this.orderStatusSnackBar("Error checking order status " + error);
          }
        }
      );
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



