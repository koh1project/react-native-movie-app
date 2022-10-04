import { Movie } from './movies.d';
export * as MovieDB from './index';
/** {@link https://developers.themoviedb.org/3/movies} */

import {
  GET_MOVIES_REQUEST_TYPES,
  MEDIA_TYPES,
  GET_TVS_REQUEST_TYPES,
  SEARCH_TYPES,
} from '../const';

export type MoviesResponse = {
  page: number;
  results: Movie[];
  dates: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
  total_results: number;
};

export type GetMoviesRequestType =
  typeof GET_MOVIES_REQUEST_TYPES[keyof typeof GET_MOVIES_REQUEST_TYPES];

export type MediaTypes = typeof MEDIA_TYPES[keyof typeof MEDIA_TYPES];
export type GetTvsRequestType =
  typeof GET_TVS_REQUEST_TYPES[keyof typeof GET_TVS_REQUEST_TYPES];

export type SearchTypes = typeof SEARCH_TYPES[keyof typeof SEARCH_TYPES];
