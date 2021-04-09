import React from 'react';
import jollyLogo from '../../assets/images/logo-icon.svg';
import classes from './Logo.module.css';

const logo = props => (
  <div className={classes.Logo}>
    <img src={jollyLogo} alt="Jolly Dev Logo" />
  </div>
);
export default logo;
