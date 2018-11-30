import * as types from './actionTypes';
import * as billsApi from '../api/billsApi';

/*
 * action creators
 */

export const loadBills = () => dispatch => {
  dispatch(loadingBills());
  return billsApi.fetchBills().then(
    response => {
      dispatch(loadedBills(response));
    },
    () => {
      dispatch(errorBills());
    }
  );
};

export const updateBill = (billId, isBill) => dispatch => {
  return billsApi.updateBill(billId, isBill).then(
    response => {
      dispatch(updatedBill(billId, isBill));
    },
    () => {
      dispatch(errorBills());
    }
  );
};

// not exported
const loadingBills = () => {
  return {
    type: types.LOADING_BILLS
  };
};
const loadedBills = bills => {
  return {
    type: types.LOADED_BILLS,
    bills
  };
};
const updatedBill = (billId, isBill) => {
  return {
    type: types.UPDATED_BILL,
    billId,
    isBill
  };
};

const errorBills = () => {
  return {
    type: types.ERROR_BILLS
  };
};
