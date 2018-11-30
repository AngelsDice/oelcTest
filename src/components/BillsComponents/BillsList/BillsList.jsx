import React from 'react';
import BillItem from '../BillItem';
import TransactionsList from '../TransactionsList';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  details: {
    alignItems: 'center'
  },
  billItem: {
    padding: '10px 24px'
  }
});

const BillsList = ({ billsList, billCategories, BillActions, classes }) => {
  return billsList.map(bill => {
    const category = billCategories.filter(
      cat => cat.id === bill.categoryId
    )[0];
    return (
      <React.Fragment key={bill.id}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.billItem}
          >
            <BillItem
              bill={bill}
              category={category}
              BillActions={BillActions}
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <TransactionsList list={bill.transactions} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  });
};

export default withStyles(styles)(BillsList);
