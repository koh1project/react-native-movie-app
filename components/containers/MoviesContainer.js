import React, { useEffect, useState } from 'react';
import { Box, Center, Text } from 'native-base';
import { MovieList } from '../lists';
import { Loading } from '../layout/Loading';
import { Movie } from '../movie';
import { getMoviesByType, fetchSearchResult } from '../../services/api';
import { MEDIA_TYPES } from '../../const';
import { Pagination } from '../pagination';

/**
 * @param {{
 *  selectedItem: GetTvsRequestType | GetMoviesRequestType |SearchTypes;
 *  type: MediaTypes;
 *  query?: string;
 * }} props
 */
export const MoviesContainer = ({ type, selectedItem, query }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = async (type) => {
    if (type === MEDIA_TYPES.SEARCH) {
      const response = await fetchSearchResult(selectedItem, query);
      getPageResults(response.results);
      return;
    }

    const response = await getMoviesByType(selectedItem, type);
    getPageResults(response.results);
  };

  const getPageResults = (results) => {
    let displayData;
    if (page === 1) {
      displayData = results.slice(0, 10);
    }
    if (page === 2) {
      displayData = results.slice(10);
    }

    setData(displayData);
  };

  const renderMovie = (item) => {
    return (
      <Movie
        key={item.id}
        movie={item}
        type={type === MEDIA_TYPES.SEARCH ? selectedItem : type}
      />
    );
  };

  useEffect(() => {
    setLoading(true);
    getData(type).then(() => setLoading(false));
  }, [selectedItem, page]);

  useEffect(() => {
    setPage(1);
  }, [type]);

  return (
    <Box style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : data.length ? (
        <>
          <Pagination onChange={setPage} page={page} />
          <MovieList data={data} render={renderMovie} />
        </>
      ) : (
        <Center mt={10}>
          <Text fontSize={20} bold>
            No Results
          </Text>
        </Center>
      )}
    </Box>
  );
};

/**
 * @typedef {import('../../types/custom').GetTvsRequestType} GetTvsRequestType
 * @typedef {import('../../types/custom').GetMoviesRequestType} GetMoviesRequestType
 * @typedef {import('../../types/custom').MediaTypes} MediaTypes
 * @typedef {import('../../types/custom').MoviesResponse} MoviesResponse
 * @typedef {import('../../types/custom').SearchTypes} SearchTypes
 */
