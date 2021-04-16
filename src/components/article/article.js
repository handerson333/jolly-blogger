import React from 'react'
import classes from './article.module.css'

const article = (props) => {
  return (
    <div className={classes.article}>
      <span className={classes.article__header}><h3>{props.title}</h3><div>{new Date(Date.parse(props.date)).toLocaleDateString("en-US")}</div></span>
      <p className={classes.article__body}>
        {props.content}
      </p>
    </div>
  );
};
export default article;
