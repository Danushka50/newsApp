import request from './ApiCentral';
import {NEWS, CATEGORY_NEWS} from '../api/API';

function getNews(page) {
  return request(
    {
      url: NEWS + '&page=' + page,
      method: 'GET',
    },
    false,
  );
}

function getCatagoryNews(catagory) {
  return request(
    {
      url: CATEGORY_NEWS + '&category=' + catagory,
      method: 'GET',
    },
    false,
  );
}

const APIServices = {
  getNews,
  getCatagoryNews,
};

export default APIServices;
