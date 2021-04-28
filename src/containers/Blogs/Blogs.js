import axios from '../../axios-blogs';
import React, { Component } from 'react';
import Article from '../../components/article/article';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Blogs.module.css';

class Blogs extends Component {
  componentDidMount() {
    this.props.onFetchPosts(this.props.token, this.props.userId);
  }

  render() {
    let posts = <Spinner />;

    if (!this.props.loading) {
      posts = this.props.posts.map((post) => {
        let shortenedPost = post.postData.content.substring(0, 197);
        if (shortenedPost.length >= 197) {
          shortenedPost += '...';
        }

        return (
          <Article
            key={post.id}
            date={post.date}
            title={post.postData.title}
            content={shortenedPost}
          />
        );
      });
    }
    return (
      <>
        <h1 className={classes.title}>Jolly Blog</h1>
        <div className={classes.posts}>{posts}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    loading: state.post.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: (token, userId) =>
      dispatch(actions.fetchPosts(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Blogs, axios));
