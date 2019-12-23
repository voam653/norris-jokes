import axios from 'axios';
import * as env from '../environments/environments';

const norrisJokesApi = axios.create({
  baseURL: env.NORRIS_JOKES_BASE_URL,
  timeout: env.DEFAULT_TIMEOUT
});

export function getNorrisCategories() {
  return norrisJokesApi.get(env.NORRIS_JOKES_CATEGORIES);
}

export function getNorrisJoke(category) {
  return norrisJokesApi.get(env.NORRIS_JOKES_JOKE + category);
}