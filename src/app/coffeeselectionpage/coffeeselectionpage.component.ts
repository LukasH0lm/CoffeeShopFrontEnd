import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {Coffee} from "./coffee.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CoffeeService} from "../coffeeService";


@Component({
  selector: 'app-coffeeselectionpage',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './coffeeselectionpage.component.html',
  styleUrl: './coffeeselectionpage.component.css'
})
export class CoffeeselectionpageComponent {

  coffees: Coffee[] = [];

  companyName: string;

  constructor(private coffeeService: CoffeeService, private route: ActivatedRoute, private router: Router) {

    this.companyName = this.route.snapshot.params['companyName'];

    this.coffees = this.coffeeService.getCoffees();
  }


  navigateToPremadeCoffeePage(coffee: Coffee) {
    this.router.navigate(['/Business', this.companyName, 'CoffeeType', 'CoffeeSelection', coffee.name]);

  }




}
