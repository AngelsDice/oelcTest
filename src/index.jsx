import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/SharedComponents/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import buildStore from './store/configureStore';
import Routes from './routes';

import './index.scss';

const store = buildStore();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <React.Fragment>
          <Routes />
        </React.Fragment>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
