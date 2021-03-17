import * as actionTypes from '../actions/actionTypes';
const initialState = {
  posts: [],
  loading: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_ARTICLE_START:
      return {
        ...state,
      };
    case actionTypes.POST_ARTICLE_SUCCESS:
      return {
        ...state,
      };
    case actionTypes.POST_ARTICLE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default reducer;