import axios from 'axios';

const norrisApi = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/',
  timeout: 6000,
  validateStatus: function(status) {
    return (
      (status >= 200 && status <= 299) ||
      (status >= 400 && status <= 499) || //BAD_REQUESTS
      (status >= 500 && status <= 599) //SERVER_ERROR
    );
  },
});

export function getNorrisCategories() {
  return norrisApi.get('categories');
}

export function getNorrisJoke(category) {
  return norrisApi.get('random?category='+category);
}