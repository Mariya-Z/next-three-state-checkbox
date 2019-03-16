import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ThreeStateCheckboxStatesEnum} from 'next-three-state-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public ThreeStateCheckboxStatesEnum = ThreeStateCheckboxStatesEnum;
  public disabled = false;
  public id = '1';
  public required = true;
  public tabIndex = 1;
  public isChecked = ThreeStateCheckboxStatesEnum.ON;
  public isCheckedReactiveForm = ThreeStateCheckboxStatesEnum.OFF;

  public reactiveForm = new FormGroup({
    threeStateCheckboxControl: new FormControl({value: this.isCheckedReactiveForm, disabled: false}),
  });
}
