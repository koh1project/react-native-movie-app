//@ts-check
import React, { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Box, Center } from 'native-base';
import { Filters } from '../filters';
import { GET_TVS_REQUEST_TYPES, MEDIA_TYPES } from '../../const';
import { MoviesContainer } from '../containers';

/**
 * @typedef {import('../../types/custom').GetTvsRequestType} GetTvsRequestType
 * @typedef {import('../../types/custom').MediaTypes} MediaTypes
 */

export const TvScreen = () => {
  const [selectedItem, setSelectedItem] = useState(
    GET_TVS_REQUEST_TYPES.POPULAR
  );

  return (
    <>
      <Box style={{ flex: 1 }}>
        <Center py={5}>
          <Filters
            handleOnChange={setSelectedItem}
            selectedItem={selectedItem}
            optionItems={GET_TVS_REQUEST_TYPES}
          />
        </Center>
        <MoviesContainer selectedItem={selectedItem} type={MEDIA_TYPES.TV} />
      </Box>
    </>
  );
};
