import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

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
  public isChecked = 1;
  public reactiveForm = new FormGroup({
    threeStateCheckboxControl: new FormControl({value: 1, disabled: false}),
  });
}
