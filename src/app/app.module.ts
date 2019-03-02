import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NextThreeStateCheckboxModule } from 'next-three-state-checkbox';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextThreeStateCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
