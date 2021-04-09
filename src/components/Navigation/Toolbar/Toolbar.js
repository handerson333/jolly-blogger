import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Link } from 'react-router-dom';
import addImg from './addButton.svg';


const toolbar = props => (
  <header className={classes.Toolbar}>

    <>
      <Link className={classes.Logo} to="/">
        <Logo height="80%" />
      </Link>
      <Link to="/edit">
        <img src={addImg} alt='add new post button' className={classes.AddNewButton} />
      </Link>
    </>

    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
