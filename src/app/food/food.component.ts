import { Component, Input, OnInit } from '@angular/core';
import { FoodRecordModel, FoodType } from '../models/food-models';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  ourFoodRecords: FoodRecordModel[] = [];
  @Input() foodType: FoodType = FoodType.BUNCHAHANOI;

  constructor(
    private foodService: FoodService
  ) { 

  }

  ngOnInit() {
    this.getFoodByFoodType(this.foodType)
  }

  getFoodByFoodType(foodType: FoodType) {
    this.ourFoodRecords = this.foodService.getFoodByFoodType(foodType)
  }

}
