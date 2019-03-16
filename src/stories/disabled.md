## Disabled checkbox

If user shouldn't have possibility to change checkbox mode, you have to pass true for disabled

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
</style>

<form class="container">

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="false"
      [required]="true"
      [tabIndex]="1"
      [id]="1"
      [(ngModel)]="isFirstChecked"
      name="checkbox1"
    ></next-three-state-checkbox>
    <label for="1" class="checkbox-layout">Checked</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="false"
      [required]="true"
      [tabIndex]="2"
      [id]="2"
      [(ngModel)]="isFirstInDetChecked"
      name="checkbox2"
    ></next-three-state-checkbox>
    <label for="2" class="checkbox-layout">Indeterminate</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="false"
      [required]="true"
      [tabIndex]="3"
      [id]="3"
      [(ngModel)]="isFirstUnChecked"
      name="checkbox3"
    ></next-three-state-checkbox>
    <label for="3" class="checkbox-layout">Unchecked</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="true"
      [required]="true"
      [tabIndex]="4"
      [id]="4"
      [(ngModel)]="isSecondCheckedDisabled"
      name="checkbox4"
    ></next-three-state-checkbox>
    <label for="4" class="checkbox-layout">Checked disabled</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="true"
      [required]="true"
      [tabIndex]="5"
      [id]="5"
      [(ngModel)]="isSecondIndetCheckedDisabled"
      name="checkbox5"
    ></next-three-state-checkbox>
    <label for="5" class="checkbox-layout">Indeterminate disabled</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="true"
      [required]="true"
      [tabIndex]="6"
      [id]="6"
      [(ngModel)]="isSecondUnCheckedDisabled"
      name="checkbox6"
    ></next-three-state-checkbox>
    <label for="6" class="checkbox-layout">Indeterminate disabled</label>
  </div>

</form>
```
