import React from 'react';
//import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import LandingPage from '../landing/landing.js';
import useAssets from '../useAssets/useassets.component';

import './sidebar.scss';

const SideBar = () => {
  const { assets } = useAssets('epg');

  return (
    <div id='sidebar-pushable'>
      <div id='sidebar-style'
        class="ui menu"
      >
        <div id='opaque'>
        </div>
        {assets.map(asset => (
          <div as='a' key={asset.id + 's'} class='menu-item'>
            {asset.title}
          </div>
        ))}
      </div>
      <LandingPage />
    </div>
  );
};

export default SideBar;
