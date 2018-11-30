import { APIConstants } from '../shared/constants';

interface BillsObject {
  categoryId: number;
  iconUrl?: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: BillsTransactions[];
}

interface BillsTransactions {
  amount: number;
  date: string;
  id: number;
}

export const fetchBills = () => {
  return fetch(`${APIConstants.base}/bills`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
};

export const updateBill = (billId: string, isBill: boolean) => {
  return fetch(`${APIConstants.base}/bills/${billId}`, {
    method: 'PATCH',
    credentials: 'same-origin',
    body: JSON.stringify({
      isBill: isBill
    })
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
};
