import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NextThreeStateCheckboxComponent} from './next-three-state-checkbox.component';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {NgModel, FormsModule, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

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
  let checkboxDebugElement: DebugElement;
  let checkboxInstance: NextThreeStateCheckboxComponent;
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
    checkboxDebugElement = fixture.debugElement.query(By.directive(NextThreeStateCheckboxComponent));
    checkboxInstance = checkboxDebugElement.componentInstance;
    ngModel = checkboxDebugElement.injector.get<NgModel>(NgModel);
    component = fixture.componentInstance;
  });

  it('should change state by click', () => {
    const input = fixture.debugElement.query(By.css('input'));
    const label = fixture.debugElement.query(By.css('label')).nativeElement;

    fixture.whenStable().then(() => {
      expect(checkboxInstance.checked).toBe(0);
      expect(input.nativeElement.indeterminate).toBeFalsy();
      expect(input.nativeElement.checked).toBeFalsy();

      label.click();
      expect(checkboxInstance.checked).toBe(1);
      expect(input.nativeElement.indeterminate).toBeTruthy();
      expect(input.nativeElement.checked).toBeFalsy();

      label.click();
      expect(checkboxInstance.checked).toBe(2);
      expect(input.nativeElement.indeterminate).toBeFalsy();
      expect(input.nativeElement.checked).toBeTruthy();

      label.click();
      expect(checkboxInstance.checked).toBe(0);
      expect(input.nativeElement.indeterminate).toBeFalsy();
      expect(input.nativeElement.checked).toBeFalsy();
    });
  });

  it('should call writeVaue', () => {
    const spyOnWriteValue = spyOn(checkboxInstance, 'writeValue');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnWriteValue).toHaveBeenCalled();
    });
  });

  it('should call setDisabled', () => {
    const spyOnSetDisabledState = spyOn(checkboxInstance, 'setDisabledState');
    component.disabled = !component.disabled;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnSetDisabledState).toHaveBeenCalled();
    });
  });

  it('should change disabled var', () => {
    checkboxInstance.setDisabledState(true);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(checkboxInstance.disabled).toBeTruthy();
    });
  });

  it('should react on click', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const spyOnRegisterOnChange = spyOn(checkboxInstance, 'registerOnChange');
    const spyOnRegisterOnTouched = spyOn(checkboxInstance, 'registerOnTouched');
    input.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnRegisterOnChange).toHaveBeenCalled();
      expect(spyOnRegisterOnTouched).toHaveBeenCalled();
    });
  });
});

describe('Reactive form', () => {
  let component: NextThreeStateCheckboxWithReactiveForm;
  let fixture: ComponentFixture<NextThreeStateCheckboxWithReactiveForm>;
  let checkboxDebugElement: DebugElement;
  let checkboxInstance: NextThreeStateCheckboxComponent;
  let spyOnWriteValue;
  let spyOnRegisterOnChange;
  let spyOnRegisterOnTouched;
  let spyOnSetDisabledState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [NextThreeStateCheckboxComponent, NextThreeStateCheckboxWithReactiveForm],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextThreeStateCheckboxWithReactiveForm);
    checkboxDebugElement = fixture.debugElement.query(By.directive(NextThreeStateCheckboxComponent));
    checkboxInstance = checkboxDebugElement.componentInstance;
    spyOnWriteValue = spyOn(checkboxInstance, 'writeValue');
    spyOnRegisterOnChange = spyOn(checkboxInstance, 'registerOnChange');
    spyOnRegisterOnTouched = spyOn(checkboxInstance, 'registerOnTouched');
    spyOnSetDisabledState = spyOn(checkboxInstance, 'setDisabledState');

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change state by click', async(() => {
    const input = fixture.debugElement.query(By.css('input'));
    const label = fixture.debugElement.query(By.css('label')).nativeElement;

    fixture.whenStable().then(() => {
      expect(checkboxInstance.checked).toBe(0);
      expect(input.nativeElement.indeterminate).toBeFalsy();
      expect(input.nativeElement.checked).toBeFalsy();

      label.click();
      expect(checkboxInstance.checked).toBe(1);
      expect(input.nativeElement.indeterminate).toBeTruthy();
      expect(input.nativeElement.checked).toBeFalsy();

      label.click();
      expect(checkboxInstance.checked).toBe(2);
      expect(input.nativeElement.indeterminate).toBeFalsy();
      expect(input.nativeElement.checked).toBeTruthy();

      label.click();
      expect(checkboxInstance.checked).toBe(0);
      expect(input.nativeElement.indeterminate).toBeFalsy();
      expect(input.nativeElement.checked).toBeFalsy();
    });
  }));

  it('should call writeVaue', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(spyOnWriteValue).toHaveBeenCalled();
    });
  }));

  it('should call setDisabled', () => {
    component.reactiveForm.controls.threeStateCheckboxControl.disable();
    checkboxInstance.disabled = !checkboxInstance.disabled;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnSetDisabledState).toHaveBeenCalled();
    });
  });

  it('should change disabled var', () => {
    component.reactiveForm.controls.threeStateCheckboxControl.disable();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.reactiveForm.controls.threeStateCheckboxControl.disabled).toBeTruthy();
    });
  });

  it('should react on click', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyOnRegisterOnChange).toHaveBeenCalled();
      expect(spyOnRegisterOnTouched).toHaveBeenCalled();
    });
  });
});

@Component({
  template: `
    <form>
      <next-three-state-checkbox
        [disabled]="disabled"
        [required]="required"
        [tabIndex]="tabIndex"
        [id]="id"
        [(ngModel)]="isChecked"
        name="checkbox"
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
  public isChecked: number = 0;
}

@Component({
  template: `
    <form [formGroup]="reactiveForm">
      <next-three-state-checkbox
        [required]="true"
        [tabIndex]="1"
        [id]="'2'"
        formControlName="threeStateCheckboxControl"
        name="checkbox2"
      ></next-three-state-checkbox>
      <label for="2">reactive form</label>
    </form>
  `,
})
class NextThreeStateCheckboxWithReactiveForm {
  public required: boolean;
  public tabIndex: number;
  public id: string;
  public reactiveForm = new FormGroup({
    threeStateCheckboxControl: new FormControl({value: 0, disabled: false}),
  });
}
