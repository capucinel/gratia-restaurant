import { Component, OnInit } from '@angular/core';
import { IImage } from '../../assets/slider/slider.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageUrls: IImage[] = [
    {
      url: '/assets/images/header.png',
      href: '#config'
    },
    {
      url: 'assets/images/breakfast.jpg',
    },
    {
      url: 'assets/images/details.jpeg',
      href: 'https://www.apple.com/'
    }
  ];

  height: '100%';
  minHeight: '400px';
  arrowSize: '30px';
  showArrows: true;
  backgroundSize: 'cover';
  backgroundPosition: 'center center';
  backgroundRepeat: 'no-repeat';
  width: '100%';

  constructor() { }

  ngOnInit() {

  }

}
