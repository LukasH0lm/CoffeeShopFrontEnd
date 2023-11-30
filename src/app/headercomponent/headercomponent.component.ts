import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {BasketPopupService} from "../basketcomponent/basketpopup.service";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-headercomponent',
  standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, MatButtonModule, MatDialogClose, MatIconModule],
  templateUrl: './headercomponent.component.html',
  styleUrl: './headercomponent.component.css'
})
export class HeadercomponentComponent {

  constructor(private popupBasketService : BasketPopupService ) {}
  openCartPopup(): void {
    this.popupBasketService.openCartPopup();
  }

}
