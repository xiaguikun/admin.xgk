import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  baseURL: '',
  timeout: 3000,
});

const http = {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          params: params,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log('err==>', err);
          reject(err);
        });
    });
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      instance
        .post(url, qs.stringify(data))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log('err==>', err);
          reject(err);
        });
    });
  },
};

export default http;
