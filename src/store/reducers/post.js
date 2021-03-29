import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  posts: [],
  loading: false
}


const postArticleInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const postArticleStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const postArticleSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};

const postArticleFail = (state, action) => {
  return updateObject(state, { loading: true });
};


const fetchPostsStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchPostsFail = (state, action) => {
  return updateObject(state, { loading: false })
}


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_ARTICLE_INIT:
      return postArticleInit(state, action)
    case actionTypes.POST_ARTICLE_START:
      return postArticleStart(state, action)
    case actionTypes.POST_ARTICLE_SUCCESS:
      return postArticleSuccess(state, action)
    case actionTypes.POST_ARTICLE_FAIL:
      return postArticleFail(state, action)
    case actionTypes.FETCH_POSTS_START:
      return fetchPostsStart(state, action)
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action)
    case actionTypes.FETCH_POSTS_FAIL:
      return fetchPostsFail(state, action)

    default:
      return state;
  }
}
export default reducer;