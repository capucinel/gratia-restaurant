import { Component, OnInit } from '@angular/core';
import { NavItems } from '../../../assets/data/items-nav.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
nav = NavItems;
  constructor() { }

  ngOnInit() {
  }

}
