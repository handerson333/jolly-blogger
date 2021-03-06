import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo height="80%" />
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
