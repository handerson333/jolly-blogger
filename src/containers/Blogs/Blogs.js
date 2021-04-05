import axios from '../../axios-blogs';
import React, { Component } from 'react';
import Article from '../../components/article/article';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import classes from './Blogs.module.css';

class Blogs extends Component {
  componentDidMount() {
    this.props.onFetchPosts();
  };

  render() {
    let posts = <Spinner />;
    if (!this.props.loading) {
      posts = this.props.posts.map((post) => (
        <Article
          key={post.id}
          post={post}
        />
      ));
    }
    return (
      <>
        <h1 className={classes.title}>Jolly Blog</h1>
        <div className={classes.posts}>{posts}</div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    loading: state.post.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(actions.fetchPosts()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Blogs, axios));
