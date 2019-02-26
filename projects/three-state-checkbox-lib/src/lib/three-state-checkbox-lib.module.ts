import { NgModule } from '@angular/core';
import { ThreeStateCheckboxLibComponent } from './three-state-checkbox-lib.component';
import { ThreeStateCheckboxComponent } from './components/three-state-checkbox/three-state-checkbox.component';

@NgModule({
  declarations: [ThreeStateCheckboxLibComponent, ThreeStateCheckboxComponent],
  imports: [
  ],
  exports: [
    ThreeStateCheckboxLibComponent,
    ThreeStateCheckboxComponent
  ]
})
export class ThreeStateCheckboxLibModule { }
