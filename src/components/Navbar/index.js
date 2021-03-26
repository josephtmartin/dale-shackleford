import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 'hidden',
    boxShadow: 'none',
    fontSize: 20,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Bio' component={Link} to='/'/>
          <Tab label='Portfolio' component={Link} to='/portfolio'/>
        </Tabs>
      </Paper>
  );
}
