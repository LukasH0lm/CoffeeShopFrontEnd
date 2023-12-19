// order-management.component.ts

import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../services/API/Orders.service';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  pendingOrders: any[] = [];

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.orderService.getPendingOrders().subscribe((orders: any[]) => {
      this.pendingOrders = orders;
    });

    console.log(this.pendingOrders);

  }

  acceptOrder(orderId: string): void {
    this.orderService.acceptOrder(orderId).subscribe(() => {

      this.pendingOrders = this.pendingOrders.filter(order => order.id !== orderId);
    });
  }

  declineOrder(orderId: string): void {
    this.orderService.deleteOrder(orderId).subscribe(() => {
      // Update the UI or perform any additional logic
      // For example, remove the declined order from the list
      this.pendingOrders = this.pendingOrders.filter(order => order.id !== orderId);
    });
  }

  deleteOrder(orderId: string): void {
    this.orderService.deleteOrder(orderId).subscribe(() => {
      // Update the UI or perform any additional logic
      // For example, remove the deleted order from the list
      this.pendingOrders = this.pendingOrders.filter(order => order.id !== orderId);
    });
  }
}
