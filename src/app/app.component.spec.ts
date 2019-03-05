import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

import {NextThreeStateCheckboxModule} from 'next-three-state-checkbox';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NextThreeStateCheckboxModule, FormsModule, ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
