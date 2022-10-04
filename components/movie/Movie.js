import React from 'react';
import { Box, HStack, Image, Text, VStack, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { IMAGE_URL } from '../../services/api_config';

/**
 * @param {{
 *  movie: MovieDB.Movie
 *  type: MediaTypes;
 * }} props
 */
export const Movie = ({ movie, type }) => {
  const navigation = useNavigation();

  return (
    <Box width="60%" py="2" shadow={3}>
      <HStack space="3" mx="4" justifyContent="space-between">
        <Image
          source={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
          alt={`${movie.title}`}
          size="120px"
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
          <Button
            size="lg"
            style={{ backgroundColor: '#06b6d4' }}
            onPress={() =>
              navigation.navigate('ShowPage', {
                id: movie.id,
                label: type === 'movie' ? movie.title : movie.name,
                type,
              })
            }
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

/**
 * @typedef {import('../../types/custom').MovieDB} MovieDB
 * @typedef {import('../../types/custom').MediaTypes} MediaTypes
 */
