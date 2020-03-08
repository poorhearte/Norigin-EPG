import React from 'react';
import SideBar from '../sidebar/sidebar.js';
//import Footer from '../footer/footer.component';
//import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  epg: {
    boxSizing: 'border-box'//box-sizing이라고 하면 문법에러남
    // display: 'flex',
    // flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
  },
}));

function EPG() {

  const classes = useStyles();

  return (
    <div className={classes.epg}>      
          <SideBar />      
      {/* <Footer /> */}
    </div>
  );
}

export default EPG;
