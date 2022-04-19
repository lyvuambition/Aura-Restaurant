import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { FoodModule } from '../food/food.module';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [CommonModule, RestaurantRoutingModule, FoodModule],
})
export class RestaurantModule {}
