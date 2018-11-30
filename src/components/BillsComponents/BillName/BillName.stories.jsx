import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BillName from '.';

storiesOf('BillName', module).add(
  'BillName',
  withInfo()(() => (
    <BillName
      name="Vodafone"
      icon="https://pbs.twimg.com/profile_images/915824582455627776/nsyHCFq9.jpg"
    />
  ))
);
