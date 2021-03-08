import React from 'react';
import jollyLogo from '../../assets/images/logo-icon.svg';
import classes from './Logo.module.css';

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={jollyLogo} alt="MyBurger" />
  </div>
);
export default logo;