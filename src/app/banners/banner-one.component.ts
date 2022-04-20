import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-one',
  templateUrl: './banner-one.component.html',
  styleUrls: ['./banner-one.component.scss']
})
export class BannerOneComponent implements OnInit {
  @Input() bannerText: string = '';
  constructor() { 

  }

  ngOnInit() {
    
  }

}
