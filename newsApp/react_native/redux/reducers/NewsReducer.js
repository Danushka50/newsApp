import {
  NEWS_DATA,
  NEWS_DATA_SUCCESS,
  NEWS_DATA_FAILED,
  CATEGORY_NEWS_DATA,
  CATEGORY_NEWS_DATA_SUCCESS,
  CATEGORY_NEWS_DATA_FAILED,
} from '../types';

const INITIAL_STATE = {
  newsLoading: false,
  news: [],
  newsTotalResults: 0,
  catagoryNewsLoading: false,
  catagoryNews: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_DATA:
      return {...state, newsLoading: true};
    case NEWS_DATA_SUCCESS:
      return {
        ...state,
        newsLoading: false,
        news: action.payload.articles,
        newsTotalResults: action.payload.totalResults,
      };
    case NEWS_DATA_FAILED:
      return {...state, newsLoading: false};
    case CATEGORY_NEWS_DATA:
      return {...state, catagoryNewsLoading: true};
    case CATEGORY_NEWS_DATA_SUCCESS:
      return {
        ...state,
        catagoryNewsLoading: false,
        catagoryNews: action.payload.sources,
      };
    case CATEGORY_NEWS_DATA_FAILED:
      return {...state, catagoryNewsLoading: false};
    default:
      return state;
  }
};
