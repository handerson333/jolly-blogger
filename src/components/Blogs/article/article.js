import React from 'react'


const article = (props) => {
  console.log('article:\t' + props)
  return (
    <div>
      <p>
        title: <strong>{props.title}</strong>
      </p>
      <p>
        Content: <strong>{props.content}</strong>
      </p>
    </div>
  );
};
export default article;
