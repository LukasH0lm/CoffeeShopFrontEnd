import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orderpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderpage.component.html',
  styleUrl: './orderpage.component.css'
})
export class OrderpageComponent {
  companyName: string;

  constructor(private route: ActivatedRoute) {
    this.companyName = this.route.snapshot.params['companyName'];
  }
}

