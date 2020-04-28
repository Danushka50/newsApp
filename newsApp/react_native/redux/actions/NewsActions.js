import {
  NEWS_DATA,
  NEWS_DATA_SUCCESS,
  NEWS_DATA_FAILED,
  CATEGORY_NEWS_DATA,
  CATEGORY_NEWS_DATA_SUCCESS,
  CATEGORY_NEWS_DATA_FAILED,
} from '../types';
import APIServices from '../../nav/APIServices';

export const getNewsData = page => {
  return dispatch => {
    dispatch({type: NEWS_DATA});
    APIServices.getNews(page)
      .then(response => {
        console.log('response', response);
        dispatch({type: NEWS_DATA_SUCCESS, payload: response});
      })
      .catch(err => {
        dispatch({type: NEWS_DATA_FAILED});
      });
  };
};

export const getCategotryNewsData = catagory => {
  return dispatch => {
    dispatch({type: CATEGORY_NEWS_DATA});
    APIServices.getCatagoryNews(catagory)
      .then(response => {
        dispatch({type: CATEGORY_NEWS_DATA_SUCCESS, payload: response});
      })
      .catch(err => {
        dispatch({type: CATEGORY_NEWS_DATA_FAILED});
      });
  };
};
