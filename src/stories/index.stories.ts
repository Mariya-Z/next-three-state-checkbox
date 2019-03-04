import {storiesOf, moduleMetadata} from '@storybook/angular';
import {withNotes} from '@storybook/addon-notes';

import * as marked from 'marked';
import * as defaultText from './default.md';

import {NextThreeStateCheckboxComponent} from 'projects/next-three-state-checkbox/src/public_api';

const styles = `
  <style>
  </style>
`;

export const checkedState = {
  isFirstChecked: true,
  isFirstUnChecked: false,
  isThirdChecked: true,
  isThirdUnChecked: false,
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
      <form ngNativeValidate>
        <next-three-state-checkbox
          [disabled]="false"
          [required]="true"
          [tabIndex]="1"
          [id]="'1'"
          [(ngModel)]="checkedState.isFirstChecked"
          name='name'
        ></next-three-state-checkbox>
      </form>
    `,
      props: {checkedState},
    })),
  );
