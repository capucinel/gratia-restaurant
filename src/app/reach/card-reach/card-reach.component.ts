import { Component, Input } from '@angular/core';
import { ReachCard } from '../../../assets/data/reach-card.model';

@Component({
  selector: 'app-card-reach',
  templateUrl: './card-reach.component.html',
  styleUrls: ['./card-reach.component.scss']
})
export class CardReachComponent {
  @Input() itemReach: ReachCard;
}
