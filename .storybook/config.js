import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

const req = require.context('../src', true, /\.stories\.js(x)$/);

addDecorator(checkA11y);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
