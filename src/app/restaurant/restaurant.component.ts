import { Component, OnInit } from '@angular/core';
import { FoodType } from '../models/food-models';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  foodMenu: FoodType[] = [
    FoodType.STEAKS,
    FoodType.CURRYANDRICE,
    FoodType.BUNCHAHANOI,
    FoodType.RICEANDMEAT,
    FoodType.NOODLES,
    FoodType.BEEFPHO
  ];

  constructor() { 

  }

  ngOnInit() {
    console.log("OUR MENU: ", this.foodMenu)
  }

}
