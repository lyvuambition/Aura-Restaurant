import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { FoodModule } from '../food/food.module';
import { MenuBannerModule } from '../menu-banner/menu-banner.module';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [CommonModule, RestaurantRoutingModule, FoodModule, MenuBannerModule],
})
export class RestaurantModule {}
