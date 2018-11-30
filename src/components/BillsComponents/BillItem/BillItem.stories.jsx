import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import BillItem from '.';

storiesOf('BillItem', module).add(
  'BillItem',
  withInfo()(() => (
    <BillItem
      BillActions={action('updateBill')}
      bill={{
        name: 'Vodafone',
        iconUrl:
          'https://pbs.twimg.com/profile_images/915824582455627776/nsyHCFq9.jpg'
      }}
      category={{
        name: 'TV',
        iconUrl:
          'https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/entertainment.png'
      }}
    />
  ))
);
