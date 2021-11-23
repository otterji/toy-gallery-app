import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '../../../constants';

export const createAPI = (url) => `${API_URL}${url}`;

// AsyncStorage get 함수 모듈
export const getItemFromAsync = (storageName) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(storageName, (err, result) => {
      if (err) {
        return reject(err);
      }
      if (result === null) {
        return resolve(null);
      }
      resolve(JSON.parse(result));
    });
  });
};

// AsyncStorage set 함수 모듈
export const setItemToAsync = (storageName, item) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
      if (error) {
        reject(error);
      }

      resolve('입력 성공');
    });
  });
};

export const removeItemToAsync = async (storageName) =>
  new Promise((resolve, reject) => {
    AsyncStorage.removeItem(storageName, (error) => {
      if (error) {
        reject(error);
      }

      resolve('제거 성공');
    });
  });

const getHeaders = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const idToken = await getItemFromAsync('idToken');
  if (idToken) {
    headers.Authorization = `Bearer ${idToken}`;
  }
  return headers;
};

export const fetcher = async (url) => {
  const options = {
    method: 'GET',
    headers: await getHeaders(),
  };
  return axios({ ...options, url })
    .then(checkStatus)
    .then(parseJSON);
};

export const kakaoFetcher = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: KAKAO_CONSTANT.REST_TOKEN,
    },
  };
  return axios({ ...options, url })
    .then(checkStatus)
    .then(parseJSON);
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  return {
    error,
    response,
  };
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.data;
}

export const poster = async ({ url, body }) => {
  const options = {
    method: 'POST',
    headers: await getHeaders(),
    data: { ...body },
  };
  return axios({ ...options, url })
    .then(checkStatus)
    .then(parseJSON);
};

export const updater = async ({ url, body }) => {
  const options = {
    method: 'PUT',
    headers: await getHeaders(),
    data: { ...body },
  };
  return axios({ ...options, url })
    .then(checkStatus)
    .then(parseJSON);
};

export const deleter = async ({ url, body }) => {
  const options = {
    method: 'DELETE',
    headers: await getHeaders(),
    data: { ...body },
  };
  return axios({ ...options, url })
    .then(checkStatus)
    .then(parseJSON);
};
