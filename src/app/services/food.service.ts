import { Injectable } from '@angular/core';
import { FoodRecordModel, FoodType } from '../models/food-models';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private api: string = 'https://source.unsplash.com/random';
  constructor() {}

  getFoodByFoodType(foodType: FoodType): FoodRecordModel[] {
    return new Array(10).fill(null).map((r: any, index) => ({
      foodType: FoodType.STEAKS,
      src: `${this.api}/200x20${index}/?${foodType}`,
      id: index,
    }));
  }

  getBeefSteak(): FoodRecordModel[] {
    return new Array(10).fill(null).map((r: any, index) => ({
      foodType: FoodType.STEAKS,
      src: `${this.api}/200x20${index}/?${FoodType.STEAKS}`,
      id: index,
    }));
  }

  getCurryAndRice(): FoodRecordModel[] {
    return new Array(10).fill(null).map((r: any, index) => ({
      foodType: FoodType.CURRYANDRICE,
      src: `${this.api}/200x20${index}/?${FoodType.CURRYANDRICE}`,
      id: index,
    }));
  }

  getBunChaHaNoi(): FoodRecordModel[] {
    return new Array(10).fill(null).map((r: any, index) => ({
      foodType: FoodType.BUNCHAHANOI,
      src: `${this.api}/200x20${index}/?${FoodType.BUNCHAHANOI}`,
      id: index,
    }));
  }

  getRiceAndMeat(): FoodRecordModel[] {
    return new Array(10).fill(null).map((r: any, index) => ({
      foodType: FoodType.RICEANDMEAT,
      src: `${this.api}/200x20${index}/?${FoodType.RICEANDMEAT}`,
      id: index,
    }));
  }

  getNoodles(): FoodRecordModel[] {
    return new Array(10).fill(null).map((r: any, index) => ({
      foodType: FoodType.NOODLES,
      src: `${this.api}/200x20${index}/?${FoodType.NOODLES}`,
      id: index,
    }));
  }

  getBeefPho(): FoodRecordModel[] {
    return new Array(10).fill(null).map((r: any, index) => ({
      foodType: FoodType.BEEFPHO,
      src: `${this.api}/200x20${index}/?${FoodType.BEEFPHO}`,
      id: index,
    }));
  }
}
