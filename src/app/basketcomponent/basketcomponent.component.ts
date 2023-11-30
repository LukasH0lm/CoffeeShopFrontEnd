import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasketService} from "../services/basket.service";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@Component({
  selector: 'app-basketcomponent',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle, MatButtonModule],
  templateUrl: './basketcomponent.component.html',
  styleUrl: './basketcomponent.component.css'
})
export class BasketcomponentComponent {

  constructor(private basketService: BasketService) {}

  items = this.basketService.getItems();
}
