import axios from '../../axios-blogs';
import React, { useEffect } from 'react';
import Article from './article/article';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

function Blogs(props) {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked 5 times`;
    props.onFetchPosts();
  });
  return (
    <>
      <Article />
    </>
  );
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
