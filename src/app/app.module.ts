import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreeStateCheckboxLibModule } from 'three-state-checkbox-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThreeStateCheckboxLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
