import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-coffeetypepage',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './coffeetypepage.component.html',
  styleUrl: './coffeetypepage.component.css'
})
export class CoffeetypepageComponent {

  companyName: string;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.companyName = this.route.snapshot.params['companyName'];
  }

  navigateToCoffeeSelectionPage() {
    this.router.navigate(['/Business', this.companyName, 'CoffeeType', 'CoffeeSelection']);
  }

  navigateToCustomCoffeePage() {
    this.router.navigate(['/Business', this.companyName, 'CoffeeType', 'CustomCoffee']);
  }


}


