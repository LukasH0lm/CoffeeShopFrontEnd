import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {CustomersService} from "../services/API/Customers.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CustomersModel} from "../models/Customers.model";

@Component({
  selector: 'app-register-user-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormsModule],
  templateUrl: './register-user-page.component.html',
  styleUrl: './register-user-page.component.css'
})
export class RegisterUserPageComponent {

  user: CustomersModel = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: ""

  };

  constructor(private customersService: CustomersService, private router: Router) {

  }

  createLogin(): void {
    this.customersService.createLogin(this.user).subscribe((response) => {
      this.router.navigate(['/Logind']);
    });
  }
}
