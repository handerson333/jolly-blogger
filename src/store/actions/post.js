import * as actionTypes from './actionTypes';
import axios from '../../axios-blogs';

export const articlePostSuccess = (id, data) => {
  console.log('ARTICLE_POST_SUCCESS');
  return {
    type: actionTypes.POST_ARTICLE_SUCCESS,
    postId: id,
    postData: data,
  };
};

export const articlePostFail = (error) => {
  console.log('ARTICLE_POST_FAIL');
  return {
    type: actionTypes.POST_ARTICLE_FAIL,
    error: error,
  };
};
export const articlePostStart = () => {
  console.log('ARTICLE_POST_START');
  return {
    type: actionTypes.POST_ARTICLE_START,
  };
};

export const postArticle = (postData) => {
  console.log('BEG_POST_ARTICLE');

  return (dispatch) => {
    dispatch(articlePostStart());
    axios
      .post('/posts.json', postData)
      .then((response) => {
        console.log('posted: ' + response.data);
        dispatch(articlePostSuccess(response.data.name, postData));
      })
      .catch((error) => dispatch(articlePostFail(error)));
  };
};
export const articlePostInit = () => {
  console.log('ARTICLE_POST_INIT');

  return {
    type: actionTypes.POST_ARTICLE_INIT,
  };
};
