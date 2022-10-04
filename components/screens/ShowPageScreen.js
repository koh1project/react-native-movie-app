import React, { useEffect, useState } from 'react';
import { Box, Image, ScrollView, StatusBar, Text } from 'native-base';
import { IMAGE_URL, getDetailsById } from '../../services';

export const ShowPageScreen = ({ route }) => {
  const [movie, setMovie] = useState({});
  const { id, type } = route.params;

  const callApi = async () => {
    const response = await getDetailsById(type, id);
    setMovie(response);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />
      <ScrollView>
        {movie?.id && (
          <Box mx={10}>
            <Text alignSelf="center" py={10} fontSize="xl" bold>
              {type === 'movie' ? movie.title : movie.name}
            </Text>
            <Image
              alignSelf="center"
              source={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
              alt="movie"
              size="2xl"
            />
            <Text py={7} color="#6a737f">
              {movie.overview ? movie.overview : 'No overview available'}
            </Text>
            <Text mb={10} fontSize="xs" color="#6e747c">
              Popularity: {movie.popularity || 'Not available'} | Release Date:
              {type === 'movie'
                ? movie.release_date || 'Not available'
                : movie.first_air_date || 'Not available'}
            </Text>
          </Box>
        )}
      </ScrollView>
    </>
  );
};
