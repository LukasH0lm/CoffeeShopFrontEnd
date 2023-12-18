import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomCoffeeService } from '../services/API/custom-coffee.service';
import { IngredientsModel } from '../models/Ingredients.model';
import { CustomCoffeeModel } from '../models/CustomCoffee.model';
import {IngredientsService} from "../services/API/Ingredients.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CreateCustomCoffeeModel} from "../models/CreateCustomCoffeeCup.model";
import {CreateIngredientsModel} from "../models/CreateIngredients.model";
import {CurrentUserService} from "../services/currentUser.service";
import {CurrentStoreService} from "../services/currentStore.service";
@Component({
  selector: 'app-custom-coffee',
  templateUrl: './custom-coffee.component.html',
  styleUrls: ['./custom-coffee.component.css'],
})
export class CustomCoffeeComponent implements OnInit {

  customCoffeeForm: FormGroup = new FormGroup({
    ingredient: new FormControl('', Validators.required),
    quantity: new FormControl(1, Validators.required),
  });
  ingredients: IngredientsModel[] = [];
  customCoffeeItems: any[] = [];
  CurrentUser: any;
  totalPrice: number = 0;

  constructor(private fb: FormBuilder, private customCoffeeService: CustomCoffeeService, private ingredientService : IngredientsService, private userService : CurrentUserService, private currentStoreService : CurrentStoreService) {}

  ngOnInit(): void {

    this.CurrentUser = this.userService.getCurrentUser()?.userId;

    // Fetch ingredients from the service
    this.ingredientService.getIngredients().subscribe(
      (ingredients: IngredientsModel[]) => {
        // Initialize the form
        this.ingredients = ingredients;

        this.customCoffeeForm = this.fb.group({
          ingredient: [this.ingredients.length > 0 ? this.ingredients[0].ingredientId : '', Validators.required],
          quantity: [1, Validators.required],
        });
      },
      (error) => {
        console.error('Error fetching ingredients:', error);
      }
    );

    console.log("ngOnInit");
    console.log("this.ingredients:");
    console.log(this.ingredients);

  }

  addIngredient(): void {
    const ingredientId = this.customCoffeeForm.get('ingredient')?.value;
    const ingredient = this.ingredients.find((i) => i.ingredientId === ingredientId);
    const quantity = this.customCoffeeForm.get('quantity')?.value;
    const ingredientName = ingredient?.name;


    if (ingredient && quantity > 0) {

      const existingIndex = this.customCoffeeItems.findIndex((item) => item.ingredient.ingredientId === ingredient.ingredientId);

      if (existingIndex !== -1) {
        // If the ingredient already exists, update the quantity
        this.customCoffeeItems[existingIndex].quantity += quantity;
      } else {
        // If the ingredient doesn't exist, add it to the list
        this.customCoffeeItems.push({ ingredient, quantity, ingredientName });
      }

      this.calculateTotalPrice();

      this.customCoffeeForm.reset();
    }
  }

  createCustomCoffee(): void {
    if (this.customCoffeeItems.length === 0) {
      console.log('No ingredients added');
      // Handle case where no ingredients are added
      return;
    }


    // SUUUUNNENEE HVORDAN FUCK VIRKER COOOOKIIEIEESS??? (╯°□°)╯︵ ┻━┻





    const customerId = this.CurrentUser;



    const customCoffee: CreateCustomCoffeeModel = {
      name: 'DefaultName', //we should add a textbox for this
      price: this.totalPrice, // Set the appropriate price
      description: 'YourCustomCoffeeDescription', // also this
      image: 'YourImageURL',
      storeIds: [this.currentStoreService.getCurrentStore()?.storeId ?? ""],
      UserId: customerId,
      itemType: 2, // we should do this in the backend
      ingredients: this.customCoffeeItems.map(item => ({
        ingredientId: item.ingredient.id, // Assuming item.ingredient has the necessary properties
        quantity: item.quantity
      })),
    };


    this.customCoffeeService.saveCustomCoffees(customCoffee)
      .subscribe((response) => {
        console.log('Custom coffee saved successfully:', response);
      }, (error) => {
        console.error('Error saving custom coffee:', error);

        // Log the API error details
        console.log('API Error Details:', error.error);
      });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.customCoffeeItems.reduce((total, item) => {
      const ingredientPrice = item.ingredient.price || 0;
      return total + ingredientPrice * item.quantity;
    }, 0);
  }

}
