import { combineReducers } from 'redux';
import bills from './billsReducer';
const rootReducer = combineReducers({
  bills
});

export default rootReducer;
