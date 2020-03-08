import React from 'react';
import LandingPage from '../landing/landing.js';
import useAssets from '../useAssets/useassets.component';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  sidebarStyle: {////첨에 애적용하면 모양이 이상해지는 에러나서 opaque, menuItem 먼저적용하고 나중에 재적용하니 정상동작 왜그럴까?
    boxShadow: '1px 0 11px 1px black',///채널명 사이드바 사이의 음영
    overflow: 'hidden', //!important;
    width: '5rem', //////////////
    background: '#fff',///없으면 투명해서 아래것이 비침
    position: 'fixed',//없으면 프로그램 가이드가 아래로 내려감
    zIndex: '102',///없으면 투명해서 아래것이 비침
  },
  opaque: {
    height: '65px'//없으면 이 칸이 없어지면서 채널사이드바가 위로 올라감
  },
  menuItem: {
    height: '8.0166vh', //8.0166vh=80px
    minHeight: '80px',
    border: '1px solid rgba(34,36,38,.15)' //없으면 채널사이 경계선 없어짐
  }
}));

const SideBar = () => {
  const { assets } = useAssets('epg');
  const classes = useStyles();

  return (
    <div>
      <div className={classes.sidebarStyle}>
        <div className={classes.opaque}/>
        {assets.map(asset => (
          <div as='a' key={asset.id + 's'} className={classes.menuItem}>
            {asset.title}
          </div>
        ))}
      </div>
      <LandingPage />
    </div>
  );
};

export default SideBar;
