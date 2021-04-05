import React from 'react'
import classes from './article.module.css'

const article = (props) => {
  return (
    <div className={classes.article}>
      <span className={classes.article__header}><h3>{props.post.postData.title}</h3><div>{new Date(Date.parse(props.post.date)).toLocaleDateString("en-US")}</div></span>
      <p className={classes.article__body}>
        {props.post.postData.content}
      </p>
    </div>
  );
};
export default article;
