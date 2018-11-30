import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

/* istanbul ignore next */
const allowDebugging =
  process.env.NODE_ENV !== 'production' ||
  (localStorage && localStorage.getItem('reactDebug') === 'yes');

const buildStore = () => {
  /* istanbul ignore next */
  /* istanbul ignore next */
  const middleWare = allowDebugging
    ? applyMiddleware(thunkMiddleware, createLogger())
    : applyMiddleware(thunkMiddleware);

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(middleWare)
  );

  return store;
};
export default buildStore;
