## Required checkbox

If checkbox is necessary / checkbox has to be checked, you have to pass true for required

### Tempalte for this example looks like code below

```
<style>
  .container {
    display: flex;
    flex-direction: column;
  }
  .checkbox-layout {
    position: relative;
    color: #9D9D9D;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
  }
  .container__row {
    display: flex;
    flex-direction: row;
  }
  .submit-btn {
    background-color: #0460a9;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 20px 0;
    font-size: 16px;
    cursor: pointer;
  }
</style>

 <form class="container" ngNativeValidate>
  <div class="container__row">
      <next-three-state-checkbox
          [disabled]="false"
          [required]="true"
          [tabIndex]="1"
          [id]="1"
          [(ngModel)]="isChecked"
          name="checkbox"
      ></next-three-state-checkbox>
      <label for="1" class="checkbox-layout">Required</label>
  </div>
  <div>
    <input class="submit-btn" type="submit" />
  </div>
</form>
```
