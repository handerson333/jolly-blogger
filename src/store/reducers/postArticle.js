import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
  posts: [],
  loading: false,
  posted: false,
};

const articlePostInit = (state, action) => {
  return updateObject(state, { posted: false });
};

const articlePostStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const articlePostSuccess = (state, action) => {
  const newPost = updateObject(action.postData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    posted: true,
    posts: state.posts.concat(newPost),
  });
};
const articlePostFail = (state, action) => {
  return updateObject(state, { loading: true });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_ARTICLE_INIT:
      return articlePostInit(state, action);
    case actionTypes.POST_ARTICLE_START:
      return articlePostStart(state, action);
    case actionTypes.POST_ARTICLE_SUCCESS:
      return articlePostSuccess(state, action);
    case actionTypes.POST_ARTICLE_FAIL:
      return articlePostFail(state, action);
    default:
      return state;
  }
};
export default reducer;
