import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeBandComponent } from './large-band.component';

describe('LargeBandComponent', () => {
  let component: LargeBandComponent;
  let fixture: ComponentFixture<LargeBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
