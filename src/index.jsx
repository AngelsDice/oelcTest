import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
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

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
