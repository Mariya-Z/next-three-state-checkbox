import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ThreeStateCheckboxStatesEnum} from 'next-three-state-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public disabled = false;
  public id = '1';
  public required = true;
  public tabIndex = 1;
  public reactiveForm = new FormGroup({
    threeStateCheckboxControl: new FormControl({value: ThreeStateCheckboxStatesEnum.OFF, disabled: false}),
  });
  public ThreeStateCheckboxStatesEnum = ThreeStateCheckboxStatesEnum;
}
