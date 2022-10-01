/** {@link https://developers.themoviedb.org/3/movies} */

import { GET_MOVIES_REQUEST_TYPES } from "../const";

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
