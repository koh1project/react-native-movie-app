import React from 'react';
import { Box, HStack, Image, Text, VStack, Button } from 'native-base';
import { IMAGE_URL } from '../../services/api_config';

export const Movie = ({ movie, type }) => {
  return (
    <Box width="60%" py="2">
      <HStack space="3" mx="4" justifyContent="space-between">
        <Image
          source={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
          alt={`${movie.title}`}
          size="110px"
        />
        <VStack w="100%">
          <Text fontSize="md" bold>
            {type === 'movie' ? movie.title : movie.name}
          </Text>
          <Text>Popularity: {movie.popularity}</Text>
          <Text>
            Release Date:
            {type === 'movie'
              ? movie.release_date || 'Not available'
              : movie.first_air_date || 'Not available'}
          </Text>
          <Button size="lg">More Details</Button>
        </VStack>
      </HStack>
    </Box>
  );
};
