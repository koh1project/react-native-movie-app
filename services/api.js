//@ts-check
import axios from 'axios';
import qs from 'qs';
import { API_KEY, BASE_URL } from './api_config';
import { GET_MOVIES_REQUEST_TYPES, MEDIA_TYPES } from '../const';

/**
 * @param {GetMoviesRequestType | GetTvsRequestType} request_type
 * @param {MediaTypes} media_type
 * @returns {Promise<MoviesResponse>}
 */
export const getMoviesByType = async (
  request_type = GET_MOVIES_REQUEST_TYPES.POPULAR,
  media_type = MEDIA_TYPES.MOVIE
) => {
  const url = `${BASE_URL}/${media_type}/${request_type}`;

  try {
    const params = {
      api_key: API_KEY,
    };

    const movieAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    });
    const response = await movieAxios.get(url, { params });

    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * @param {string} id
 * @param {MediaTypes} type
 * @returns {Promise<MovieDB.Movie>}
 */
export const getDetailsById = async (type, id) => {
  const url = `${BASE_URL}/${type}/${id}`;

  try {
    const params = {
      api_key: API_KEY,
    };
    const response = await axios.get(url, { params });

    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * @param {string} query
 * @param {SearchTypes} selectedItem
 * @returns {Promise<MoviesResponse>}
 */
export const fetchSearchResult = async (selectedItem, query) => {
  const url = `${BASE_URL}/search/${selectedItem}`;
  const params = {
    api_key: API_KEY,
    query,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * @typedef {import('../types/custom').GetMoviesRequestType} GetMoviesRequestType
 * @typedef {import('../types/custom').GetTvsRequestType} GetTvsRequestType
 * @typedef {import('../types/custom').MediaTypes} MediaTypes
 * @typedef {import('../types/custom').SearchTypes} SearchTypes
 * @typedef {import('../types/custom').MoviesResponse} MoviesResponse
 * @typedef {import('../types/custom').MovieDB} MovieDB
 */
