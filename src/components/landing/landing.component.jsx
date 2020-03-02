import React, { useState, useEffect } from 'react';
import './landing.styles.scss';
//import HeaderDate from '../header/headerdate.component';
import ChannelList, {
  getDatePosition
} from '../channelList/channelList.component';
import Timeline from '../header/headerTimeline.component';
import useAssets from '../useAssets/useassets.component';

const LandingPage = ({ pos2 }) => {///pos2?????????????
  const { error, loading } = useAssets('epg');
  const [position, setPosition] = useState(7200);
  //const [scroll, setScroll] = useState(true);
  const now = new Date();
  const currentShows = 7200 - getDatePosition(now);

  useEffect(() => {
    (pos2 => {
      setPosition(currentShows);

      setInterval(() => {
        const update = new Date();
        const updateShows = 7200 - getDatePosition(update);
        position <= -7200
          ? setPosition(7200)
          : currentShows !== updateShows
          ? setPosition(updateShows)
          : setPosition(currentShows);
      }, 10) //1000ms = 100 sec? ????????

    })(pos2);

  }, [pos2]);



  if (loading) {
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
  }

  return (
    <div className='container'>
      {/* <HeaderDate /> */}
      <div className='landingpage'>
        <div className='alignment' style={{ left: `${position}px` }}>
          <Timeline position={position} />
          <ChannelList />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
