import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import FAB from '../../UI/FAB/FAB';
import { Link } from 'react-router-dom';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Link className={classes.Logo} to="/">
      <Logo height="80%" />
    </Link>
    <Link to="/edit">
      <FAB />
    </Link>

    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
