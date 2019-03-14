import {
  Component,
  Input,
  forwardRef,
  AfterViewInit,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

let counter = 0;

export enum ThreeStateCheckboxStatesEnum {
  OFF,
  INDETERMINATE,
  ON,
}

@Component({
  selector: 'next-three-state-checkbox',
  templateUrl: './next-three-state-checkbox.component.html',
  styleUrls: ['./next-three-state-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NextThreeStateCheckboxComponent),
      multi: true,
    },
  ],
})
export class NextThreeStateCheckboxComponent implements ControlValueAccessor, AfterViewInit {
  public get inputId(): string {
    return this.id;
  }

  public get checked(): number {
    return this.isChecked;
  }

  public set checked(checked: number) {
    if (checked !== this.checked) {
      this.isChecked = checked;
      this.indeterminate = checked === ThreeStateCheckboxStatesEnum.INDETERMINATE;
      this.renderCheckbox();
    }
  }
  @Input() public disabled: boolean;
  @Input() public required: boolean;
  @Input() public tabIndex: number;
  @Input() public id = `next-three-state-checkbox-${++counter}`;

  @ViewChild('input') public inputCheckbox: ElementRef;

  public indeterminate = false;

  private isChecked = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef, private render: Renderer2, private el: ElementRef) {}

  public ngAfterViewInit() {
    this.render.removeAttribute(this.el.nativeElement, 'id');
  }

  public writeValue(value: number): void {
    this.checked = value;
  }

  public registerOnChange(fn: (val?: any) => void): void {
    this.controlValueAccessorChangeFn = fn;
  }

  public registerOnTouched(fn: (val?: any) => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  public onChange(): void {
    this.setState((this.checked + 1) % 3);
    this.controlValueAccessorChangeFn(this.checked);
  }

  protected controlValueAccessorChangeFn: (value: any) => void = () => null;
  protected onTouched: (value: any) => void = () => null;

  private renderCheckbox() {
    this.inputCheckbox.nativeElement.indeterminate = this.indeterminate;
    this.inputCheckbox.nativeElement.checked = this.checked === ThreeStateCheckboxStatesEnum.ON;
    this.inputCheckbox.nativeElement.value = this.checked === ThreeStateCheckboxStatesEnum.ON;
  }

  private setState(value: ThreeStateCheckboxStatesEnum) {
    this.checked = value;
  }
}
