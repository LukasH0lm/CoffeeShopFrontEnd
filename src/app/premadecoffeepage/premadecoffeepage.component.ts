import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CoffeeService} from "../services/premadeCoffeeService";
import {Coffee} from "../coffeeselectionpage/coffee.model";
import {CurrentCoffeeService} from "../services/currentcoffee.service";
import {BasketService} from "../services/basket.service";
@Component({
  selector: 'app-premadecoffeepage',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './premadecoffeepage.component.html',
  styleUrl: './premadecoffeepage.component.css'
})
export class PremadecoffeepageComponent {

  coffee: Coffee | undefined;
  constructor(private currentCoffeeService: CurrentCoffeeService, private basketService: BasketService, private route: ActivatedRoute) {

    const routingCoffeeName = this.route.snapshot.params['coffeeName'];

    if (this.currentCoffeeService.getCurrentCoffee() === undefined) {
      this.currentCoffeeService.setCurrentCoffeeByName(routingCoffeeName);
    }

    this.coffee = this.currentCoffeeService.getCurrentCoffee();
  }

  addToCart(): void {
    this.basketService.addToCart(this.coffee);
  }

}
