## Project setup

```
npm i next-three-state-checkbox
```

### Three-state-checkbox is defined through FormControl element or ngModel binding

### Three-state-checkbox has 4 input parametrs

- disabled: boolean
- required: boolean
- tabIndex: number
- id: string

id is optional, if you don't pass it, id will be added automatically. In this case it's impossible to add lable for toggle

This checkbox has three states:

- unchecked (off)
- indeterminate
- checked (on)

State of checkbox defines as Enum in library

```
export const enum ThreeStateCheckboxStatesEnum {
  OFF,
  INDETERMINATE,
  ON,
}
```

To define checkbox state you should import ThreeStateCheckboxStatesEnum and then use ThreeStateCheckboxStates.ON, ThreeStateCheckboxStates.OFF and ThreeStateCheckboxStates.INDETERMINATE

## Basic usage example with NgModel

### Add module into your app

```
import {NextThreestateCheckboxModule} from 'next-three-state-checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextThreeStateCheckboxModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```

### Add code to the component file

```
import {ThreeStateCheckboxStatesEnum} from 'next-three-state-checkbox';

export class AppComponent {
  ...
  public ThreeStateCheckboxStatesEnum = ThreeStateCheckboxStatesEnum;
}
```

### Add murkup to the template file

```
<form>
    <next-three-state-checkbox
        [disabled]="false"
        [required]="true"
        [tabIndex]="1"
        [id]="'1'"
        [(ngModel)]="ThreeStateCheckboxStatesEnum.ON"
        name="checkbox"
    ></next-three-state-checkbox>
    <label for="1">Label for checkbox</label>
</form>

```

## Basic usage example with ReactiveForms

### Add module into your app

```
import {NextThreeStateCheckboxModule} from 'next-three-state-checkbox';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextThreeStateCheckboxModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

### Add code to the component file

```
export class AppComponent {
  ...
  reactiveForm = new FormGroup({
    threeStateCheckboxControl: new FormControl({value: ThreeStateCheckboxStatesEnum.ON, disabled: false}),
  });
}
```

### Add murkup to the template file

```
<form [formGroup]="reactiveForm">
    <next-three-state-checkbox
        [required]="true"
        [tabIndex]="1"
        [id]="'0'"
        formControlName="threeStateCheckboxControl"
    ></next-three-state-checkboxe>
    <label for="0">reactive form</label>
</form>
```

### Template for this example looks like code below

```
<style>
  .container {
    display: flex;
    flex-direction: column;
    font-size: 30px;
  }
  .checkbox-layout {
    position: relative;
    font-weight: 600;
    margin: 0;
  }
  .container__row {
    display: flex;
    flex-direction: row;
  }
</style>

<form class="container">
    <div class="container__row">
        <next-three-state-checkbox
            [disabled]="false"
            [required]="true"
            [tabIndex]="1"
            [id]="1"
            [(ngModel)]="ThreeStateCheckboxStatesEnum.ON"
            name="checkbox"
        ></next-three-state-checkbox>
        <label for="1" class="checkbox-layout">Label for three-state-checkbox</label>
    </div>
</form>
```
