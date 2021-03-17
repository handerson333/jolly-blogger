import * as actionTypes from './actionTypes';
import axios from '../../axios-blogs';

export const articlePostSuccess = (id, data) => {
  return {
    type: actionTypes.POST_ARTICLE_SUCCESS,
    postId: id,
    postData: data,
  };
};

export const articlePostFail = (error) => {
  return {
    type: actionTypes.POST_ARTICLE_FAIL,
    error: error
  }
}
export const articlePostStart = () => {
  return {
    type: actionTypes.POST_ARTICLE_START
  }
}

export const postArticle = (postData) => {
  return (dispatch) => {
    dispatch(articlePostStart());
    axios.post('/posts.json', postData)
      .then((response) => {
        console.log('posted: ' + response.data);
        dispatch(articlePostSuccess(response.data.name, postData));
      })
      .catch((error) => dispatch(articlePostFail(error)));
  }
}
export const articlePostInit = () => {
  return {
    type: actionTypes.POST_ARTICLE_INIT
  }
}