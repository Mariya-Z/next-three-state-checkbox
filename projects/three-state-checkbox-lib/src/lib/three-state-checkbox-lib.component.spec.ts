import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStateCheckboxLibComponent } from './three-state-checkbox-lib.component';

describe('ThreeStateCheckboxLibComponent', () => {
  let component: ThreeStateCheckboxLibComponent;
  let fixture: ComponentFixture<ThreeStateCheckboxLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeStateCheckboxLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeStateCheckboxLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
