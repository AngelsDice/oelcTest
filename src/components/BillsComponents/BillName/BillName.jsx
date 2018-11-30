import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(20)
  },
  subheading: {
    fontSize: theme.typography.pxToRem(14),
    color: '#999',
    paddingTop: '8px'
  },
  billIcon: {
    verticalAlign: 'bottom',
    height: 30,
    width: 30,
    marginRight: '10px'
  }
});

const BillName = ({ classes, name, icon, transactionCount }) => (
  <React.Fragment>
    <Typography className={classes.heading}>
      {icon && (
        <img
          src={icon}
          alt={name}
          className={classes.billIcon}
          onError={e =>
            e.target.setAttribute('src', 'http://1x1px.me/FFFFFF-0.png')
          }
        />
      )}
      {name}
    </Typography>
    <Typography className={classes.subheading}>
      {transactionCount} transactions
    </Typography>
  </React.Fragment>
);

export default withStyles(styles)(BillName);
