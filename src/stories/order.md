## Element order

Checkbox has input tabIndex parameter that's why it's possible to change elements order on page manually

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
      [tabIndex]="2"
      [id]="1"
      [(ngModel)]="isFirstChecked"
      name="checkbox1"
    ></next-three-state-checkbox>
    <label for="1" class="checkbox-layout">Second</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="false"
      [required]="true"
      [tabIndex]="4"
      [id]="2"
      [(ngModel)]="isSecondChecked"
      name="checkbox2"
    ></next-three-state-checkbox>
    <label for="2" class="checkbox-layout">Fourth</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="false"
      [required]="true"
      [tabIndex]="1"
      [id]="3"
      [(ngModel)]="isThirdChecked"
      name="checkbox3"
    ></next-three-state-checkbox>
    <label for="3" class="checkbox-layout">First</label>
  </div>

  <div class="container__row">
    <next-three-state-checkbox
      [disabled]="false"
      [required]="true"
      [tabIndex]="3"
      [id]="4"
      [(ngModel)]="isFourthCheked"
      name="checkbox4"
    ></next-three-state-checkbox>
    <label for="4" class="checkbox-layout">Third</label>
  </div>

</form>

```
