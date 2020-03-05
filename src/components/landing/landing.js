import React, { useState, useEffect, useRef } from 'react';
import './landing.scss';
//import HeaderDate from '../header/headerdate.component';
import ChannelList, {
  getDatePosition
} from '../channelList/channelList.js';
import Timeline from '../header/timeline.js';
//import useAssets from '../useAssets/useassets.component';

const LandingPage = () => {
  //const { error, loading } = useAssets('epg');
  const [position, setPosition] = useState(7200);
  const now = new Date();
  const currentShows = 7200 - getDatePosition(now);
  const scrollElem = useRef(0);

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
      <div className='landingpage' ref={scrollElem}>
        <div className='alignment' style={{ left: `7200px`}}  >
        {/* <div className='alignment' style={{ left: `${position}px` }}> */}
          <Timeline position={position} />
          <ChannelList />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
