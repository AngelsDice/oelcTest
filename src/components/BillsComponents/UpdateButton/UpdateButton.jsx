import React from 'react';
import Button from '@material-ui/core/Button';

const UpdateButton = ({ BillActions, billId, isBill }) => (
  <Button
    variant="contained"
    onClick={() => BillActions.updateBill(billId, !isBill)}
  >
    {isBill ? 'Remove Bill' : 'Add Bill'}
  </Button>
);

export default UpdateButton;
