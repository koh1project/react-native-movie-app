//@ts-check
import axios from 'axios';
import qs from 'qs';
import { API_KEY, BASE_URL } from './api_config';
import {
  GetMoviesRequestType,
  MoviesResponse,
  // @ts-ignore
} from '../types/index.d.ts';

import { GET_MOVIES_REQUEST_TYPES } from '../const';

/**
 * @param {GetMoviesRequestType} request_type
 * @returns {MoviesResponse}
 */
export const getMoviesByType = async (
  request_type = GET_MOVIES_REQUEST_TYPES.POPULAR
) => {
  const url = `${BASE_URL}/movie/${request_type}`;

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
