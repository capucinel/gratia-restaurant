import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-band',
  templateUrl: './large-band.component.html',
  styleUrls: ['./large-band.component.scss']
})
export class LargeBandComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit() {
  }

}
