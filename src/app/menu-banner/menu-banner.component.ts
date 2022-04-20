import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BannerOneComponent } from '../banners/banner-one.component';

@Component({
  selector: 'app-menu-banner',
  templateUrl: './menu-banner.component.html',
  styleUrls: ['./menu-banner.component.scss']
})
export class MenuBannerComponent implements OnInit {

  @ViewChild('templateHost', { static: true, read: ViewContainerRef }) templateHost: ViewContainerRef | null = null;
  constructor() { 

  }

  ngOnInit() {
    console.log(this.templateHost);
    const componentRef: ComponentRef<BannerOneComponent> = this.templateHost?.createComponent(BannerOneComponent);
    if (componentRef) {
      componentRef.instance.bannerText = 'TODAY MENU!!!'
    }
  }

}
