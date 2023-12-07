import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-register-user-page',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './register-user-page.component.html',
  styleUrl: './register-user-page.component.css'
})
export class RegisterUserPageComponent {

}
