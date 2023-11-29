import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CoffeeService} from "../coffeeService";
import {Coffee} from "../coffeeselectionpage/coffee.model";

@Component({
  selector: 'app-premadecoffeepage',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './premadecoffeepage.component.html',
  styleUrl: './premadecoffeepage.component.css'
})
export class PremadecoffeepageComponent {

  coffeeName: string;
  coffee: Coffee | undefined;
  constructor(private coffeeService: CoffeeService, private route: ActivatedRoute, private router: Router) {

    this.coffeeName = this.route.snapshot.params['coffeeName'];

    this.coffee = this.coffeeService.getCoffeeByName(this.coffeeName);
  }


}
