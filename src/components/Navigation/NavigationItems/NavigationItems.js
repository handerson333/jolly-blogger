import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Past</NavigationItem>
    <NavigationItem link="/edit">New</NavigationItem>
    {/* <NavigationItem link="/auth">Authenticate</NavigationItem> */}
  </ul>
);

export default navigationItems;
