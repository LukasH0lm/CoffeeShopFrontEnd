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

  public user: {
    firstName: string;
    lastName: string;
    password: string;
    address: string;
    phone: string;
    userId: string;
    email: string
    isAdmin: boolean;
  }= {
    firstName: '',
    lastName: '',
    password: '',
    address: '',
    phone: '',
    userId: '',
    email: '',
    isAdmin: false,
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
