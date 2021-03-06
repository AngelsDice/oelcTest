import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TransactionsList from '.';

storiesOf('TransactionsList', module).add(
  'TransactionsList',
  withInfo()(() => (
    <TransactionsList
      list={[
        {
          amount: 12.34,
          date: '2018-01-13',
          id: 36
        },
        {
          amount: 14.34,
          date: '2018-02-13',
          id: 37
        },
        {
          amount: 15.54,
          date: '2018-03-13',
          id: 38
        },
        {
          amount: 11.34,
          date: '2018-04-13',
          id: 39
        },
        {
          amount: 18.99,
          date: '2018-05-13',
          id: 40
        }
      ]}
    />
  ))
);
