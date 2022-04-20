import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBannerComponent } from './menu-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuBannerComponent
  ],
  exports: [
    MenuBannerComponent
  ]
})
export class MenuBannerModule { }