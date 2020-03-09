import React, { useState, useEffect, useRef } from 'react';
import ChannelList, {
  getDatePosition
} from '../channelList/channelList.js';
import Timeline from '../header/timeline.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  landingpage: {
    display: 'flex',//없으면 화면구성 이상해짐
    flexDirection: 'column',//없으면 뭔가 약간 이상해짐
    alignItems: 'center',//없으면 화면구성 이상해짐
    minHeight: '77vh',
    overflowY: 'hidden',//없으면 가장 오른쪽 스크롤바생김
  }, 
  alignment : {
    position: 'relative'//없으면 verticalNowLine없어지고 이상해짐
  }
}));


const LandingPage = () => {
  const [position, setPosition] = useState(7200);
  const now = new Date();
  const currentShows = 7200 - getDatePosition(now);
  const scrollElem = useRef(0);
  const classes = useStyles();

  //console.log('[LandingPage]position=',position,'getDatePosition(now)=',getDatePosition(now), 'now=',now );

  useEffect(() => {
    //console.log('[useEffect]loading=', loading);
    console.log('[useEffect]position=',position,'getDatePosition(now)=',getDatePosition(now), 'now=',now );
    setPosition(currentShows);
    if(scrollElem.current!==0) {
      scrollElem.current.scrollLeft=getDatePosition(now); //current.getBoundingClientRect() 
    }
    else{
      const setIntervalId = setInterval(() => {
        if(scrollElem.current!==0){
            scrollElem.current.scrollLeft=getDatePosition(now);
            clearInterval(setIntervalId);
        }
      }, 100);
    }

    setInterval(() => {
      const update = new Date();
      const updateShows = 7200 - getDatePosition(update);
      position <= -7200 ?
                          setPosition(7200) : currentShows !== updateShows ?
                                                                            (setPosition(updateShows)) : setPosition(currentShows);
    }, 1000) //1000ms = 100 sec? ????????
  }, [position]);

  /*if (loading) {
    return (
      <div id='loader' className='ui segment'>
        <i className='notched circle loading icon' /> Loading...
      </div>
    );
  }

  if (error.status) {
    return (
      <div id='error' className='ui icon message'>
        <i className='notched circle loading icon' />
        <div className='content'>
          <div className='header'>{error.message}</div>
        </div>
      </div>
    );
  }*/

  return (
    <div className='container'>
      {/* <HeaderDate /> */}
      <div className={classes.landingpage} ref={scrollElem}>
        <div className={classes.alignment} style={{ left: `7200px`}}  >
        {/* <div className='alignment' style={{ left: `${position}px` }}> */}
          <Timeline position={position} />
          <ChannelList />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
