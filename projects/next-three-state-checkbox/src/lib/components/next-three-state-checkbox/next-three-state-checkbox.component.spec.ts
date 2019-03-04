import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { NextThreeStateCheckboxComponent } from './next-three-state-checkbox.component';

describe('ThreeStateCheckboxComponent', () => {
  let component: NextThreeStateCheckboxComponent;
  let fixture: ComponentFixture<NextThreeStateCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextThreeStateCheckboxComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextThreeStateCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
