import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(20)
  },
  billIcon: {
    verticalAlign: 'bottom',
    height: 30,
    width: 30,
    marginRight: '10px'
  }
});

const BillName = ({ classes, name, icon }) => (
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
);

export default withStyles(styles)(BillName);
