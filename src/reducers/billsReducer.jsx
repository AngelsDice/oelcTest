import * as types from '../actions/actionTypes';

const initialState = {
  billsLoading: true,
  categoriesLoading: true,
  error: false,
  bills: [],
  categories: []
};

const billsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_BILLS:
      return {
        ...state,
        billsLoading: true
      };
    case types.LOADED_BILLS:
      return {
        ...state,
        billsLoading: false,
        bills: action.bills
      };
    case types.ERROR_BILLS:
      return {
        ...state,
        error: true
      };
    case types.LOADING_CATEGORIES:
      return {
        ...state,
        categoriesLoading: true
      };
    case types.LOADED_CATEGORIES:
      return {
        ...state,
        categoriesLoading: false,
        categories: action.categories
      };
    case types.ERROR_CATEGORIES:
      return {
        ...state,
        error: true
      };
    case types.UPDATED_BILL:
      return {
        ...state,
        bills: state.bills.map(bill =>
          bill.id === action.billId ? { ...bill, isBill: action.isBill } : bill
        )
      };
    default:
      return state;
  }
};

export default billsReducer;
