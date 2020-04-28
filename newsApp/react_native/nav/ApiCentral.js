import axios from 'axios';
import {BASE_URL} from '../api/API';

const request = async function(options, isHeader) {
  const client = axios.create({
    baseURL: BASE_URL,
    timeout: 70000,
  });

  const onSuccess = function(response) {
    return response.data;
  };

  const onError = function(error) {
    if (error.response) {
    } else {
      console.log('Error Message:', error.message);
    }
    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
