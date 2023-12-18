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

  constructor(private fb: FormBuilder, private customCoffeeService: CustomCoffeeService, private ingredientService : IngredientsService, userService : CurrentUserService) {}

  ngOnInit(): void {

    this.CurrentUser = localStorage.getItem('currentUser');

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


    if (ingredient) {
      this.customCoffeeItems.push({ ingredient, quantity, ingredientName });
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



    //const customerId = this.CurrentUser.UserId;

    const customerId = "bb1d83d7-4c3a-4ec4-2934-08dbfc92f062";



    const customCoffee: CreateCustomCoffeeModel = {
      // Other properties...
      name: 'YourCustomCoffeeName',
      price: 0, // Set the appropriate price
      description: 'YourCustomCoffeeDescription',
      image: 'YourImageURL',
      storeIds: ['29582967-4ed4-4c10-87c8-14ae2c533545'],
      UserId: customerId,
      itemType: 0, // Set the appropriate item type
      ingredients: this.customCoffeeItems.map(item => ({
        ingredientId: item.ingredient.id, // Assuming item.ingredient has the necessary properties
        quantity: item.quantity
      })),
    };

    // Call your service to save the custom coffee cup

    this.customCoffeeService.saveCustomCoffees(customCoffee)
      .subscribe((response) => {
        console.log('Custom coffee saved successfully:', response);
      }, (error) => {
        console.error('Error saving custom coffee:', error);

        // Log the API error details
        console.log('API Error Details:', error.error);
      });
  }
}
