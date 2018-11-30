import React from 'react';
import { StyleConstants } from '../../../shared/constants';
import { withStyles } from '@material-ui/core/styles';
import BillsList from '../BillsList';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  header: {
    backgroundColor: StyleConstants.colors.blue
  },
  heading: {
    fontSize: theme.typography.pxToRem(20)
  }
});

class Bills extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const {
      potentialBills,
      realBills,
      BillActions,
      classes,
      billCategories
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Bills" />
            <Tab label="Potential Bills" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            {realBills.length > 0 ? (
              <BillsList
                BillActions={BillActions}
                billCategories={billCategories}
                billsList={realBills}
              />
            ) : (
              <Typography className={classes.heading}>
                You have no items to view
              </Typography>
            )}
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            {potentialBills.length > 0 ? (
              <BillsList
                BillActions={BillActions}
                billCategories={billCategories}
                billsList={potentialBills}
              />
            ) : (
              <Typography className={classes.heading}>
                You have no items to view
              </Typography>
            )}
          </TabContainer>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Bills);
