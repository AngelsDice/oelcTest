import React from 'react';
import { Route, Switch } from 'react-router';

import Bills from './containers/BillsContainer';

/* eslint-disable */
const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={Bills} />
    <Route exact path={'/bills/'} component={Bills} />
  </Switch>
);

export default Routes;
/* eslint-enable */
