import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Past</NavigationItem>
    <NavigationItem link="/edit">New</NavigationItem>
    {!props.isAuthenticated ? <NavigationItem link="/auth">Login</NavigationItem> : <NavigationItem link="/logout">Logout</NavigationItem>}
  </ul>
);

export default navigationItems;
