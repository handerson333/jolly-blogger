import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Link to='./'>
          <div className={classes.Logo}>
            <Logo />
          </div>
        </Link>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};
export default sideDrawer;
