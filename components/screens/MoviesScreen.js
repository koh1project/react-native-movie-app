import React, { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Box, Center } from 'native-base';
import { MoviesContainer } from '../containers';

export const MoviesScreen = () => {
  return (
    <Box style={{ flex: 1 }}>
      <Center py={5}></Center>
      <MoviesContainer type="movie" />
    </Box>
  );
};
