import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { cardsMenuData } from '../../assets/data/cards-menu-data';

@Component({
  selector: 'app-card',
  animations: [
    trigger('cardHover', [
      state('hoverOff', style({
        'height': '325px',
        'transform': 'scale(1)',
        'boxShadow': 'none',
      })),
      state('hoverOn', style({
        'height': '330px',
        'transform': 'scale(1.1)',
        'boxShadow': '10px -10px 25px 0 rgba(0, 0, 0, 0.1)'
      })),
      transition('hoverOff => hoverOn', [
        animate('0.4s')
      ]),
      transition('hoverOn => hoverOff', [
        animate('0.4s')
      ]),
    ]),
    trigger('title', [
      state('hoverOff', style({
        'top': '35%',
        'padding-bottom': '25px'
      })),
      state('hoverOn', style({
        'top': '55%',
        'padding-bottom': '15px'
      }))
    ]),

    trigger('description', [
      state('hoverOff', style({
        'top': '55%',
      })),
      state('hoverOn', style({
        'top': '75%',
      }))
    ]),

    trigger('border', [
      state('hoverOff', style({
        'color': '#d89b64',
        'top': '47%',

      })),
      state('hoverOn', style({
        'color': '#151b29',
        'top': '67%',
      }))
    ]),
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  hoverOff: boolean;
  dataMenus = cardsMenuData;

  hover() {
    this.hoverOff = !this.hoverOff;
    console.log(this.hoverOff);
  }

  getUrl() {
    return 'url(assets/images/desserts-home.jpg)';
  }
  ngOnInit() {
    this.hoverOff = true;
  }
}
