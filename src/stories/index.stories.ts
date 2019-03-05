import {storiesOf, moduleMetadata} from '@storybook/angular';
import {withNotes} from '@storybook/addon-notes';

import * as marked from 'marked';
import * as defaultText from './default.md';
import * as requiredText from './required.md';
import * as disabledText from './disabled.md';
import * as sizesText from './sizes.md';
import * as orderText from './order.md';

import {NextThreeStateCheckboxComponent} from 'projects/next-three-state-checkbox/src/public_api';

const styles = `
  <style>
  .container \{
    display: flex;
    flex-direction: column;
    font-size: 30px;
    align-items: baseline;
  \}
  .checkbox-layout \{
    position: relative;
    font-weight: 600;
    margin: 0;
  \}
  .container__row \{
    display: flex;
    flex-direction: row;
  \}
  .small \{
    font-size: 10px;
  \}
  .medium \{
    font-size: 16px;
  \}
  .big \{
    font-size: 26px;
  \}
  .submit-btn \{
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
  \}
  </style>
`;

export const checkedState = {
  isFirstChecked: 0,
  isFirstUnChecked: false,
  isThirdChecked: true,
  isThirdUnChecked: false,
};

export const checkedStatesForDifferentSize = {
  isFirstChecked: 1,
  isSecondChecked: 0,
  isThirdChecked: 2,
};

export const checkedStateforDisabled = {
  isFirstChecked: 2,
  isFirstInDetChecked: 1,
  isFirstUnChecked: 0,
  isSecondCheckedDisabled: 2,
  isSecondIndetCheckedDisabled: 1,
  isSecondUnCheckedDisabled: 0,
};

export const checkedStatesForDiffTabIndex = {
  isFirstChecked: 1,
  isSecondChecked: 0,
  isThirdChecked: 2,
  isFourthCheked: 0,
};

export const checkedRequired = {
  isChecked: 0,
};

storiesOf('Next-three-state-checkbox', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NextThreeStateCheckboxComponent],
    }),
  )
  .add(
    'Install',
    withNotes({text: marked(defaultText)})(() => ({
      template: `
      ${styles}
      <form class="container">
        <div class="container__row">
            <next-three-state-checkbox
                [disabled]="false"
                [required]="true"
                [tabIndex]="1"
                [id]="1"
                [(ngModel)]="checkedState.isFirstChecked"
                name="checkbox"
            ></next-three-state-checkbox>
            <label for="1" class="checkbox-layout">Label for three-state-checkbox</label>
        </div>
      </form>
    `,
      props: {checkedState},
    })),
  )
  .add(
    'With different font-sizes',
    withNotes({text: marked(sizesText)})(() => ({
      template: `
        ${styles}
        <form class="container">

        <div class="container__row">
          <next-three-state-checkbox class="small"
            [disabled]="false"
            [required]="true"
            [tabIndex]="1"
            [id]="1"
            [(ngModel)]="checkedStatesForDifferentSize.isFirstChecked"
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
            [(ngModel)]="checkedStatesForDifferentSize.isSecondChecked"
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
            [(ngModel)]="checkedStatesForDifferentSize.isThirdChecked"
            name="checkbox3"
          ></next-three-state-checkbox>
          <label for="3" class="big checkbox-layout">26px</label>
        </div>
        </form>
        `,
        props: {checkedStatesForDifferentSize},
    })),
  )
  .add(
    'With disabled checkbox',
    withNotes({text: marked(disabledText)})(() => ({
      template: `
        ${styles}
        <form class="container">

          <div class="container__row">
            <next-three-state-checkbox
              [disabled]="false"
              [required]="true"
              [tabIndex]="1"
              [id]="1"
              [(ngModel)]="checkedStateforDisabled.isFirstChecked"
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
              [(ngModel)]="checkedStateforDisabled.isFirstInDetChecked"
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
              [(ngModel)]="checkedStateforDisabled.isFirstUnChecked"
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
              [(ngModel)]="checkedStateforDisabled.isSecondCheckedDisabled"
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
              [(ngModel)]="checkedStateforDisabled.isSecondIndetCheckedDisabled"
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
              [(ngModel)]="checkedStateforDisabled.isSecondUnCheckedDisabled"
              name="checkbox6"
            ></next-three-state-checkbox>
            <label for="6" class="checkbox-layout">Indeterminate disabled</label>
          </div>

        </form>
        `
        ,
        props: {checkedStateforDisabled},
    })),
  )
  .add(
    'With different tab indexes',
    withNotes({text: marked(orderText)})(() => ({
      template: `
        ${styles}
        <form class="container">

          <div class="container__row">
            <next-three-state-checkbox
              [disabled]="false"
              [required]="true"
              [tabIndex]="2"
              [id]="1"
              [(ngModel)]="checkedStatesForDiffTabIndex.isFirstChecked"
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
              [(ngModel)]="checkedStatesForDiffTabIndex.isSecondChecked"
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
              [(ngModel)]="checkedStatesForDiffTabIndex.isThirdChecked"
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
              [(ngModel)]="checkedStatesForDiffTabIndex.isFourthCheked"
              name="checkbox4"
            ></next-three-state-checkbox>
            <label for="4" class="checkbox-layout">Third</label>
          </div>

        </form>
        `
        ,
        props: {checkedStatesForDiffTabIndex},
    })),
  )
  .add(
    'With required attribute',
    withNotes({text: marked(requiredText)})(() => ({
      template: `
      ${styles}
      <form class="container" ngNativeValidate>
        <div class="container__row">
            <next-three-state-checkbox
                [disabled]="false"
                [required]="true"
                [tabIndex]="1"
                [id]="1"
                [(ngModel)]="checkedRequired.isChecked"
                name="checkbox"
            ></next-three-state-checkbox>
            <label for="1" class="checkbox-layout">Required</label>
        </div>
        <div>
          <input class="submit-btn" type="submit" />
        </div>
      </form>
    `,
      props: {checkedRequired},
    })),
  )
  ;
