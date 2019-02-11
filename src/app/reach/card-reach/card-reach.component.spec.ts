import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReachComponent } from './card-reach.component';

describe('CardReachComponent', () => {
  let component: CardReachComponent;
  let fixture: ComponentFixture<CardReachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
