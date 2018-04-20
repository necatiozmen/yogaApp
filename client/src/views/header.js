import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const Header = () => (

  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">YOGA</FontIcon>}
      label="STUDIOS"
    />
    <Tab
      icon={<FontIcon className="material-icons">PERSONAL</FontIcon>}
      label="YOGA INSTRUCTORS"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="SIGN UP"
    />
  </Tabs>
);

export default Header;
