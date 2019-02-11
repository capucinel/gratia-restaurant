import { Component, OnInit, Input } from '@angular/core';
import { CardMenu } from '../../assets/data/cards-menu-data.model';
import { cardsMenuData } from '../../assets/data/cards-menu-data';

@Component({
  selector: 'app-perfection',
  templateUrl: './perfection.component.html',
  styleUrls: ['./perfection.component.scss']
})
export class PerfectionComponent implements OnInit {
  @Input() dataMenus: CardMenu[];



  ngOnInit() {
    this.dataMenus = cardsMenuData;

  }
}
