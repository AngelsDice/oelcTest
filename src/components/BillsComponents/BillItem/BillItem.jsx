import React from 'react';
import BillName from '../BillName';
import CategoryName from '../CategoryName';
import UpdateButton from '../UpdateButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  column: {
    flexBasis: '33.33%'
  }
});
const BillItem = ({ classes, bill, category, BillActions }) => (
  <div className={classes.root}>
    <div className={classes.column}>
      <BillName
        name={bill.name}
        icon={bill.iconUrl}
        transactionCount={bill.transactions.length}
      />
    </div>
    <div className={classes.column}>
      <CategoryName name={category.name} icon={category.iconUrl} />
    </div>
    <div className={classes.column}>
      <UpdateButton
        BillActions={BillActions}
        billId={bill.id}
        isBill={bill.isBill}
      />
    </div>
  </div>
);
export default withStyles(styles)(BillItem);
