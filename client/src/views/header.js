import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import { Link } from 'react-router-dom';

import '../App.css'


const Header = () => (

  <Tabs className="tabs-container">

    <Tab
      icon={<FontIcon className="material-icons">YOGA</FontIcon>}
      label="STUDIOS"
      containerElement={<Link to="/" />}
    />
    <Tab
      icon={<FontIcon className="material-icons" >PERSONAL</FontIcon>}
      label="YOGA INSTRUCTORS"
        containerElement={<Link to="/instructorlist" />}
    />
    <Tab
      icon={<FontIcon className="material-icons" >CREATE PROFILE</FontIcon>}
      label="FOR PERSONAL INSTRUCTORS"
      containerElement={<Link to="/profilecreate" />}
    />
    <Tab
      icon={<MapsPersonPin />}
      label="SIGN UP"
    />
  </Tabs>
);

export default Header;
