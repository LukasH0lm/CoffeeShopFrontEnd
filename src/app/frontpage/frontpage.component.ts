import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent {
  constructor(private router: Router) {
  }


  navigateToSelectPage() {
    this.router.navigate(['/Business']);
  }

}
