import { Injectable } from '@angular/core';
import { Coffee } from '../coffeeselectionpage/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {

  private coffees: Coffee[] = [
    { name: 'Kaffe-frappé',
      description: 'En LÆKKER KAFFE-FRAPPÉ – Perfekt til varme sommerdage.',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true},
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Kaffe-Lassi',
      description: 'Denne kaffedrik er en udgave af den klassiske, indiske ”Lassi".',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Kaffe-Colada',
      description: 'En kaffecocktail med caribisk smag',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Kaffe-milkshake', description: 'Kold forfriskende milkshake.',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Fransk-toddy',
      description: 'En skøn kombination af toddy og kaffe',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Iskaffe-med-tonic',
      description: 'Forfriskende iskaffe med tonicvand og mynte',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true},
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Kaffe-æggepunch',
      description: 'Den perfekte kaffedrik til festlige anledninger',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true},
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Klassisk-iskaffe',
      description: 'Dejlig, kold iskaffe til de varme dage',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Mexicansk-kaffe',
      description: 'Dejlig, fyldig kaffedrik med smag af chokolade og kanel',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Jamaicansk-kaffe',
      description: 'Sort kaffe med citrus og rom',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Kaffe-ispinde',
      description: 'Glæd dine kolleger med en forfriskende hjemmelavet kaffe-ispinde.',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Nitrogenkaffe',
      description: 'Forfriskende kold kaffe med små bobler',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Café-de-Olla',
      description: 'Traditionel mexicansk kaffedrik',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Afrikansk-kaffe',
      description: 'I Afrika drikkes kaffe ofte med kondenseret mælk. Denne opskrift tager udgangspunkt i afrikansk bryg med en lækker likør-afrunding.',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Kaffeisterninger',
      description: 'Pift iskaffe- eller Bailey-drinken op med lækre kaffeisterninger.',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Chocolate-chip-macchiato',
      description: 'Lækker cappuccino med Oreo',
      picture  : 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Hasselcino',
      description: 'Lækker cappuccino med hasselnødder',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Toffee-Coffee',
      description: 'Lækker ice latte med karamel',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Nutty-Gritty',
      description: 'Skøn ice latte med hasselnødder',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Lets-go-nuts',
      description: 'Lækker café latte med nøddesmag',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },
    { name: 'Snickers-fantasy',
      description: 'Ice latte med den ultimate smagsoplevelse',
      picture: 'assets/pictures/coffeepictures/kaffe-frappe.jpg',
      ingredients: [
        { name: 'Afkølet stærk kaffe', quantity: 4.5,  checked: true },
        { name: 'vaniljeessens', quantity: 8,  checked: true },
        { name: 'knust is', quantity: 3,  checked: true },
        { name: 'kondenseret mælk', quantity: 4,  checked: true },
        { name: 'sukker', quantity: 1,  checked: true },
        { name: 'flødeskum', quantity: 1,  checked: true },
        { name: 'kakaodrys', quantity: 1,  checked: true },
      ], },

  ];

  getCoffees(): Coffee[] {
    return this.coffees;
  }

  getCoffeeByName(name: string) {
    return this.coffees.find((coffee) => coffee.name === name);
  }


}