import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-headercomponent',
  standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './headercomponent.component.html',
  styleUrl: './headercomponent.component.css'
})
export class HeadercomponentComponent {

}
