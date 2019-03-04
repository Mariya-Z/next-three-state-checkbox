import {Component} from '@angular/core';

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
  public isChecked = 2;
}
