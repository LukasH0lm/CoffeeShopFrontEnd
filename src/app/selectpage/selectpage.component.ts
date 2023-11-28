import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-selectpage',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './selectpage.component.html',
  styleUrl: './selectpage.component.css'
})
export class SelectpageComponent {
  constructor(private router: Router) {}



  navigateToCoffeeTypePage(companyName: string) {
    this.router.navigate(['/Business', companyName, 'CoffeeType'] );
  }


}
