import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {Coffee} from "./coffee.model";


@Component({
  selector: 'app-coffeeselectionpage',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './coffeeselectionpage.component.html',
  styleUrl: './coffeeselectionpage.component.css'
})
export class CoffeeselectionpageComponent {

  coffees: Coffee[] = [
    { name: 'Kaffe-frappé', description: 'En LÆKKER KAFFE-FRAPPÉ – Perfekt til varme sommerdage.', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Kaffe-Lassi', description: 'Denne kaffedrik er en udgave af den klassiske, indiske ”Lassi".', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Kaffe Colada', description: 'En kaffecocktail med caribisk smag', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Kaffe-milkshake', description: 'Kold forfriskende milkshake.', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Fransk toddy', description: 'En skøn kombination af toddy og kaffe', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Iskaffe med tonic', description: 'Forfriskende iskaffe med tonicvand og mynte', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Kaffe-æggepunch', description: 'Den perfekte kaffedrik til festlige anledninger', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Klassisk iskaffe', description: 'Dejlig, kold iskaffe til de varme dage', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Mexicansk kaffe', description: 'Dejlig, fyldig kaffedrik med smag af chokolade og kanel', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Jamaicansk kaffe', description: 'Sort kaffe med citrus og rom', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Kaffe-ispinde', description: 'Glæd dine kolleger med en forfriskende hjemmelavet kaffe-ispinde.', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Nitrogenkaffe', description: 'Forfriskende kold kaffe med små bobler', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Café de Olla', description: 'Traditionel mexicansk kaffedrik', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Afrikansk kaffe', description: 'I Afrika drikkes kaffe ofte med kondenseret mælk. Denne opskrift tager udgangspunkt i afrikansk bryg med en lækker likør-afrunding.', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Kaffeisterninger', description: 'Pift iskaffe- eller Bailey-drinken op med lækre kaffeisterninger.', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Chocolate chip macchiato', description: 'Lækker cappuccino med Oreo', picture  : 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Hasselcino', description: 'Lækker cappuccino med hasselnødder', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Toffee Coffee - ice latte med karamel', description: 'Lækker ice latte med karamel', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Nutty Gritty', description: 'Skøn ice latte med hasselnødder', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Lets go nuts', description: 'Lækker café latte med nøddesmag', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },
    { name: 'Snickers fantasy', description: 'Ice latte med den ultimate smagsoplevelse', picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg' },

  ];
}
