import { Component, OnInit, Input } from '@angular/core';
import { ReachCard } from '../../assets/data/reach-card.model';
import { reachCardsData } from '../../assets/data/cards-menu-data';
@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.scss']
})
export class ReachComponent implements OnInit {
  @Input() dataReach: ReachCard[];

  ngOnInit() {
    this.dataReach = reachCardsData;
  }

}
