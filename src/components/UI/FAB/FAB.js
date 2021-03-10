import React from 'react';
import classes from './FAB.module.css';

const fab = (props) => (
  <div className={classes.fabContainer}>
    <button
      disabled={props.disabled}
      className={[classes.fab, classes[props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      +
  </button>
  </div>
);
export default fab;
