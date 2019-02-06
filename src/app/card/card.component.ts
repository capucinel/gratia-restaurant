import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
hoverOn: boolean;
hoverOff: boolean;

hover() {
  this.hoverOn = !this.hoverOn;

  console.log(this.hoverOn);
}

hoverO() {
  this.hoverOn = !this.hoverOn;
console.log("off = " + this.hoverOn);

}
  getUrl() {
    return 'url(assets/images/desserts-home.jpg)';
  }
  ngOnInit() {
  this.hoverOn = false;
  this.hoverOff = true;
  }

}
