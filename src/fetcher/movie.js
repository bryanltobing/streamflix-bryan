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
