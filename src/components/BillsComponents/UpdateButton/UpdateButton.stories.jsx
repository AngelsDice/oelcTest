import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import UpdateButton from '.';

storiesOf('UpdateButton', module)
  .add(
    'UpdateButton - isBill is true',
    withInfo()(() => (
      <UpdateButton
        BillActions={action('updateBill')}
        billId={123}
        isBill={true}
      />
    ))
  )
  .add(
    'UpdateButton - isBill is fale',
    withInfo()(() => (
      <UpdateButton
        BillActions={action('updateBill')}
        billId={123}
        isBill={false}
      />
    ))
  );
