import axios from '../../axios-blogs';
import React, { Component } from 'react';
import Article from './article/article';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Blogs extends Component {
  componentDidMount() {
    this.props.onFetchPosts();
    console.log('COMPONENT DID MOUNT:\t' + this.props.posts)
  };

  render() {
    let posts = <Spinner />;
    if (!this.props.loading) {
      posts = this.props.posts.map((post) => (
        <Article
          key={post.id}
          title={post.postData.title}
          content={post.postData.content}
        />
      ));
      <p>done loading</p>
    }
    return <div>{posts}</div>;
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
    onFetchPosts: () => dispatch(actions.fetchPosts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Blogs, axios));
