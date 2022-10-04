import React, { useEffect, useState } from 'react';
import { Box, Center, Text } from 'native-base';
import { MovieList } from '../lists';
import { Loading } from '../layout/Loading';
import { Movie } from '../movie';
import { getMoviesByType } from '../../services/api';

/**
 * @typedef {import('../../types/custom').GetTvsRequestType} GetTvsRequestType
 * @typedef {import('../../types/custom').GetMoviesRequestType} GetMoviesRequestType
 * @typedef {import('../../types/custom').MediaTypes} MediaTypes
 * @typedef {import('../../types/custom').MoviesResponse} MoviesResponse
 */

/**
 * @param {{
 *  selectedItem: GetTvsRequestType | GetMoviesRequestType;
 *  type: MediaTypes;
 * }} props
 */
export const MoviesContainer = ({ type, selectedItem }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (type) => {
    const response = await getMoviesByType(selectedItem, type);
    setData(response.results);
  };

  const renderMovie = (item) => (
    <Movie key={item.id} movie={item} type={type} />
  );

  useEffect(() => {
    setLoading(true);
    getData(type).then(() => setLoading(false));
  }, [selectedItem]);

  return (
    <Box style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : data.length ? (
        <MovieList data={data} render={renderMovie} />
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
