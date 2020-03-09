import React from 'react';
import SideBar from '../sidebar/sidebar.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  layout: {
		width: 'auto',
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(1100 + theme.spacing(3) * 2)]: {
      width: 1100,//최대width를 1100으로 고정시키는 의미
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
  epg: {
    boxSizing: 'border-box',//box-sizing이라고 하면 문법에러남
    height: '77vh',//채널갯수 많을 때 화면밑으로 내려가지 않도록
    overflowY: 'auto',//채널갯수 많을 때 화면밑으로 내려가지 않고 스크를되도록
    transform: 'translate3d(0,0,0)',//////중요 이거없으면 sideBar가 함께 스크롤링되지 않고 무조건 고정됨
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
    <div className={classes.layout}>
      <div className={classes.epg}>
        <SideBar />      
      </div>
    </div>
  );
}

export default EPG;
