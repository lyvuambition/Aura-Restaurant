import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-menu-banner',
  templateUrl: './menu-banner.component.html',
  styleUrls: ['./menu-banner.component.scss']
})
export class MenuBannerComponent implements OnInit {

  @ViewChild('templateHost', { static: false, read: ViewContainerRef })
  constructor() { 

  }

  ngOnInit() {
    
  }

}
