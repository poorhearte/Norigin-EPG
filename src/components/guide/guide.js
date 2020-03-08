import React from 'react';
//import './guide.scss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  guideStyle: {
    wordWrap: 'break-word',
    border: 'solid 0.5px rgb(143, 145, 146)',
    textAlign: 'left',
    height: '8.0166vh',//없으면 웹페이지 비율바뀌면 안맞게됨
    minHeight: '80px',
    padding: '17px',//없으면 제목이 위로올라감
  },
  programTitle: {
      fontSize: '1.1rem', //없으면 글자엄청커짐
      margin: '0',//없으면 이상해짐
      fontWeight: '500'
  },
  programTime: {
      color: '#7a58d8'
  },
  shownow: {
    backgroundColor: 'rgb(167, 165, 165)'
  }
}));

const Guide = props => {
  const classes = useStyles();
  const { size, schedule } = props;

  const showNow = currentShow(schedule) ? `${classes.guideStyle} ${classes.shownow}` : classes.guideStyle;

  return (
    <div  style={{ width: size }} className={showNow}>
        <h1 className={classes.programTitle}>{schedule.title}</h1>
        <span className={classes.programTime}>{translateDate(schedule)}</span>
    </div>
  );
};

function translateDate(schedule) {
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);

  return (
    ('0' + start.getHours()).slice(-2) +
    ':' +
    ('0' + start.getMinutes()).slice(-2) +
    ' - ' +
    ('0' + end.getHours()).slice(-2) +
    ':' +
    ('0' + end.getMinutes()).slice(-2)
  );
}

function currentShow(schedule) {
  const now = new Date();
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);
  return (
    now.getHours() * 60 + now.getMinutes() >
      start.getHours() * 60 + start.getMinutes() &&
    now.getHours() * 60 + now.getMinutes() <
      end.getHours() * 60 + end.getMinutes()
  );
}

export default Guide;
