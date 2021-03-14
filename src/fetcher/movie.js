import { makeGetApiRequest } from 'module/makeApiRequest';

const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async ({ page }) => {
  const url_endpoint = '/trending/all/day';
  const api_key_endpoint = `?api_key=${process.env.REACT_APP_MOVIEDB_APIKEY}`;
  const page_endpoint = page ? `&page=${page}` : '';

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${page_endpoint}`,
  };

  const data = await makeGetApiRequest(configRequest);
  return data;
};

export const getNowPlayingMovies = async ({ page, region, language }) => {
  const url_endpoint = '/movie/now_playing';
  const api_key_endpoint = `?api_key=${process.env.REACT_APP_MOVIEDB_APIKEY}`;
  const page_endpoint = page ? `&page=${page}` : '';
  const language_endpoint = language ? `&language=${language}` : '';
  const region_endpoint = region ? `&region=${region}` : '';

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${page_endpoint}${language_endpoint}${region_endpoint}`,
  };

  const data = await makeGetApiRequest(configRequest);
  return data;
};

export const getDetailMovie = async ({ id, language }) => {
  const url_endpoint = `/movie/${id}`;
  const api_key_endpoint = `?api_key=${process.env.REACT_APP_MOVIEDB_APIKEY}`;
  const language_endpoint = language ? `&language=${language}` : '';

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${language_endpoint}`,
  };

  const data = await makeGetApiRequest(configRequest);
  return data;
};

export const getSimilarMovie = async ({ id, language, page }) => {
  const url_endpoint = `/movie/${id}/similar`;
  const api_key_endpoint = `?api_key=${process.env.REACT_APP_MOVIEDB_APIKEY}`;
  const language_endpoint = language ? `&language=${language}` : '';
  const page_endpoint = page ? `&page=${page}` : '';

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${language_endpoint}${page_endpoint}`,
  };

  const data = await makeGetApiRequest(configRequest);
  return data;
};

export const getMovieSearch = async ({ language, page, query }) => {
  const url_endpoint = `/search/movie`;
  const api_key_endpoint = `?api_key=${process.env.REACT_APP_MOVIEDB_APIKEY}`;
  const language_endpoint = language ? `&language=${language}` : '';
  const page_endpoint = page ? `&page=${page}` : '';
  const query_endpoint = `&query=${query}`;

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${language_endpoint}${page_endpoint}${query_endpoint}`,
  };

  const data = await makeGetApiRequest(configRequest);
  return data;
};
