import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {UsersService} from "../services/API/Users.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {UserModel} from "../models/User.model";

@Component({
  selector: 'app-register-user-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormsModule],
  templateUrl: './register-user-page.component.html',
  styleUrl: './register-user-page.component.css'
})
export class RegisterUserPageComponent {

  user: UserModel = {
    userId: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: ""

  };

  constructor(private customersService: UsersService, private router: Router) {

  }

  createLogin(): void {
    this.customersService.createLogin(this.user).subscribe((response) => {
      this.router.navigate(['/Logind']);
      ////console.log(response);
    });
  }
}
