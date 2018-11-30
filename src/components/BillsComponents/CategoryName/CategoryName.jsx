import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#999'
  },
  icon: {
    verticalAlign: 'bottom',
    height: 25,
    width: 25,
    marginRight: '10px'
  }
});

const CategoryName = ({ classes, name, icon }) => (
  <Typography className={classes.heading}>
    {icon && (
      <img
        src={icon}
        alt={name}
        className={classes.icon}
        onError={e =>
          e.target.setAttribute('src', 'http://1x1px.me/FFFFFF-0.png')
        }
      />
    )}
    {name}
  </Typography>
);

export default withStyles(styles)(CategoryName);
