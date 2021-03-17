import React, { Component } from 'react';
import * as actions from '../../../store/actions/';
import axios from '../../../axios-blogs';
import { connect } from 'react-redux';
import classes from './BlogContent.module.css';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';



export class BlogContent extends Component {
  state = {
    postForm: {
      name: "hayden",
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Post Title',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      content: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
          placeholder: 'Post Title',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      }
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.postForm) {
      formData[formElementIdentifier] = this.state.postForm[
        formElementIdentifier
      ].value;
    }
    const post = {
      postData: formData
    }
    this.props.onArticlePost(post);

  };

  render() {
    return (
      <div className={classes.wrapper}>
        <form className={classes.paper} method="get" action="">
          <div className={classes.margin}>Title:
        <input className={classes.blogInputTitle} type="text" name="title" />
          </div>
          <textarea placeholder="What's on your mind? " className={classes.blogInputText} name="text" rows="4"></textarea>
          <button className={classes.PostButton}>Post</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onArticlePost: (postData) => dispatch(actions.postArticle(postData))
  }
}

export default connect(null, mapDispatchToProps)(withErrorHandler(BlogContent, axios));