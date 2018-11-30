import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CategoryName from '.';

storiesOf('CategoryName', module).add(
  'CategoryName',
  withInfo()(() => (
    <CategoryName
      name="TV"
      icon="https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/entertainment.png"
    />
  ))
);
