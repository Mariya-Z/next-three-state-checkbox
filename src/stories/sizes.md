## Three state checkbox size

Checkbox size depends on font size, developer should change just font size, checkbox size will be changed automatically

### Tempalte for this example looks like code below

```
<style>
  .container {
    display: flex;
    flex-direction: column;
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
  .small {
      font-size: 10px;
  }
  .medium {
    font-size: 16px;
  }
  .big {
    font-size: 26px;
  }
</style>

<form class="container">

  <div class="container__row">
    <next-three-state-checkbox class="small"
      [disabled]="false"
      [required]="true"
      [tabIndex]="1"
      [id]="1"
      [(ngModel)]="ThreeStateCheckboxStatesEnum.INDETERMINATE"
      name="checkbox1"
    ></next-three-state-checkbox>
    <label for="1" class="small checkbox-layout">10px</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox class="medium"
      [disabled]="false"
      [required]="true"
      [tabIndex]="2"
      [id]="2"
      [(ngModel)]="ThreeStateCheckboxStatesEnum.OFF"
      name="checkbox2"
    ></next-three-state-checkbox>
    <label for="2" class="medium checkbox-layout">16px</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox class="big"
      [disabled]="false"
      [required]="true"
      [tabIndex]="3"
      [id]="3"
      [(ngModel)]="ThreeStateCheckboxStatesEnum.ON"
      name="checkbox3"
    ></next-three-state-checkbox>
    <label for="3" class="big checkbox-layout">26px</label>
  </div>
</form>
```
