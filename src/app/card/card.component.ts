import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  animations: [
    trigger('cardHover', [
      state('hoverOff', style({
        height: '325px',
      })),
      state('hoverOn', style({
        height: '400px',
      })),
      transition('hoverOff => hoverOn', [
        animate('0.4s')
      ]),
      transition('hoverOn => hoverOff', [
        animate('0.2s')
      ]),
    ]),

    trigger('layer', [
      state('hoverOff', style({
        'backgroundColor': 'rgba(0, 0, 0, 0.6)'
      })),
      state('hoverOn', style({
        'backgroundColor': 'transparent',
      })),
      transition('hoverOff => hoverOn', [
        animate('0.4s')
      ]),
      transition('hoverOn => hoverOff', [
        animate('0.2s')
      ]),
    ]),

    trigger('title', [
      state('hoverOff', style({
        'top': '15%',
        'padding-bottom': '25px'
      })),
      state('hoverOn', style({
        'top': '45%',
        'padding-bottom': '15px'
      }))
    ]),

    trigger('description', [
      state('hoverOff', style({
        'top': '30%',
      })),
      state('hoverOn', style({
        'top': '60%',
      }))
    ]),

    trigger('border', [
      state('hoverOff', style({
        'color': '#d89b64',
        'top': '25%',

      })),
      state('hoverOn', style({
        'color': '#151b29',
        'top': '55%',

      }))
    ]),
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  hoverOff: boolean;

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
