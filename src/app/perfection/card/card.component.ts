import { Component, Input } from '@angular/core';
import { CardMenu } from '../../../assets/data/cards-menu-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() itemMenu: CardMenu;

}
