import {async, ComponentFixture, TestBed, fakeAsync, flush} from '@angular/core/testing';

import {NextThreeStateCheckboxComponent} from './next-three-state-checkbox.component';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {NgModel, FormsModule} from '@angular/forms';

describe('ThreeStateCheckboxComponent', () => {
  let component: NextThreeStateCheckboxComponent;
  let fixture: ComponentFixture<NextThreeStateCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextThreeStateCheckboxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextThreeStateCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate id for element automatically', () => {
    expect(component.inputId.startsWith('next-three-state-checkbox-')).toBeTruthy();
  });

  it('should change value by click', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input.checked).toBeFalsy();
    input.click();
    fixture.detectChanges();
    expect(input.checked).toBeTruthy();
  });
});

describe('NextThreeStateCheckboxComponent with external id', () => {
  let component: NextThreeStateCheckboxComponent;
  let fixture: ComponentFixture<NextThreeStateCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextThreeStateCheckboxComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(NextThreeStateCheckboxComponent);
    component = fixture.componentInstance;
    component.id = 'someValue';
    fixture.detectChanges();
  });

  it('should use external id for component', () => {
    expect(component.inputId).toEqual('someValue');
  });
});

describe('ngModel', () => {
  let component: NextThreeStateCheckboxWithNgModel;
  let fixture: ComponentFixture<NextThreeStateCheckboxWithNgModel>;
  let toggleDebugElement: DebugElement;
  let toggleInstance: NextThreeStateCheckboxComponent;
  let ngModel: NgModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NextThreeStateCheckboxWithNgModel, NextThreeStateCheckboxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextThreeStateCheckboxWithNgModel);
    fixture.detectChanges();
    toggleDebugElement = fixture.debugElement.query(By.directive(NextThreeStateCheckboxComponent));
    toggleInstance = toggleDebugElement.componentInstance;
    ngModel = toggleDebugElement.injector.get<NgModel>(NgModel);
    component = fixture.componentInstance;
  });

  it('should call writeVaue', () => {
    const spyOnWriteValue = spyOn(toggleInstance, 'writeValue');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnWriteValue).toHaveBeenCalled();
    });
  });

  it('should call setDisabled', () => {
    const spyOnSetDisabledState = spyOn(toggleInstance, 'setDisabledState');
    component.disabled = !component.disabled;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnSetDisabledState).toHaveBeenCalled();
    });
  });

  it('should change disabled var', () => {
    toggleInstance.setDisabledState(true);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(toggleInstance.disabled).toBeTruthy();
    });
  });

  it('should react on click', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const spyOnRegisterChange = spyOn(toggleInstance, 'registerOnChange');
    const spyOnRegisterOnTouched = spyOn(toggleInstance, 'registerOnTouched');
    input.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnRegisterChange).toHaveBeenCalled();
      expect(spyOnRegisterOnTouched).toHaveBeenCalled();
    });
  });

  it('should be disabled', async(
    fakeAsync(() => {
      const onchange = spyOn(toggleInstance, 'onChange');
      toggleInstance.disabled = true;
      toggleInstance.setDisabledState(true);
      const input = fixture.debugElement.query(By.css('input'));
      input.triggerEventHandler('change', new Event('change'));
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        flush();
        fixture.detectChanges();
        expect(onchange).not.toHaveBeenCalled();
      });
    }),
  ));
});

@Component({
  template: `
    <form class="ng-model-form">
      <next-three-state-checkbox
        [disabled]="disabled"
        [required]="required"
        [tabIndex]="tabIndex"
        [id]="id"
        [(ngModel)]="isChecked"
        name="toggle"
      ></next-three-state-checkbox>
      <label for="1" class="checkbox-layout">reactive form</label>
    </form>
  `,
})
class NextThreeStateCheckboxWithNgModel {
  public disabled: boolean = false;
  public required: boolean = true;
  public tabIndex: number = 1;
  public id: string = '1';
  public isChecked: number = 2;
}
