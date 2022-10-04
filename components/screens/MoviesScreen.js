import React, { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Box, Center } from 'native-base';
import { MoviesContainer } from '../containers';
import { Filters } from '../filters';
import { GET_MOVIES_REQUEST_TYPES } from '../../const';

export const MoviesScreen = () => {
  const isFocused = useIsFocused();
  const [selectedItem, setSelectedItem] = useState(
    GET_MOVIES_REQUEST_TYPES.POPULAR
  );

  return (
    <>
      {isFocused && (
        <Box style={{ flex: 1 }}>
          <Center py={5}>
            <Filters
              handleOnChange={setSelectedItem}
              selectedItem={selectedItem}
            />
          </Center>
          <MoviesContainer type="movie" selectedItem={selectedItem} />
        </Box>
      )}
    </>
  );
};
