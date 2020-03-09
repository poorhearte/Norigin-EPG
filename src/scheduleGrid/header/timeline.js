import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  timelineStyle: {
    display: 'inline-flex'//없으면 화면이 채널사이드바 밑으로 내려감
  },
  timeHour: {
    width: '600px',//없으면 젤 위 시간표 줄어듦
    padding: '20.5px 0 20.5px 0',//없으면 젤위 시간표가 위아래로 완전 짧아짐
    textAlign: 'left',/////////////////center;
    //border: '1px solid rgba(34,36,38,.15)'
    borderStyle: 'solid',
    borderWidth: '0.2px 0.2px 0.2px 0px',
  },
  verticalMarker: {
    position: 'absolute',//없으면 verticalNowLine이 위로 겹치지 않고 자기공간 차지함
    width: '1.8px',
    //height: '90%',//없으면 화면비율 줄이면 없어짐
    height: '75vh',//바깥넓이 77vh랑 같으면 항상 스크롤바 생기게됨 그래서 조금 줄여줘야함
    backgroundColor: 'gold'
  }
}));

const Timeline = props => {
  const { position } = props;
  const classes = useStyles();

  return (
    <div className={classes.timelineStyle}>
      <div className={classes.verticalMarker} style={{ left: `${7200 - position}px` }} />
      {timeloop(classes)}
    </div>
  );
};

function timeloop(classes) {
  let hours = [];
  for (let hour = 0; hour < 24; hour++) {
    let time = ('0' + hour).slice(-2) + ':00';
    hours.push(
      <div key={hour} className={classes.timeHour}>
        {time}
      </div>
    );
  }
  return hours;
}

export default Timeline;
