import React from 'react';
import classes from './BlogContent.module.css';


const blogContent = (props) => (
  <div className={classes.wrapper}>
    <form className={classes.paper} method="get" action="">
      <div className={classes.margin}>Title:
        <input className={classes.blogInputTitle} type="text" name="title" />
      </div>
      <textarea placeholder="What's on your mind? " className={classes.blogInputText} name="text" rows="4"></textarea>
      <input className={classes.blogButton} type="submit" value="Create" />
    </form>
  </div>


);
export default blogContent;