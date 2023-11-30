import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketcomponentComponent } from './basketcomponent.component';

@Injectable({
  providedIn: 'root',
})
export class BasketPopupService {
  constructor(private dialog: MatDialog) {}

  openCartPopup(): void {
    this.dialog.open(BasketcomponentComponent, {
      width: '300px',
    });
  }
}
