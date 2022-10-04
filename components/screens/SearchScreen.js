import React, { useState } from 'react';
import { Box, Center, Text } from 'native-base';
import { SearchForm } from '../forms';
import { MoviesContainer } from '../containers';
import { MEDIA_TYPES, SEARCH_TYPES } from '../../const';

const initFormState = {
  selectedItem: SEARCH_TYPES.MULTI,
  query: '',
};

export const SearchScreen = () => {
  const [formInput, setFormInput] = useState(initFormState);

  return (
    <>
      <Box py={5} ml={8}>
        <SearchForm onSubmit={setFormInput} />
        {!formInput?.query && (
          <Center mt={20}>
            <Text fontSize={20} bold ml={-8}>
              Please initiate a search
            </Text>
          </Center>
        )}
      </Box>
      {formInput?.query && (
        <MoviesContainer
          selectedItem={formInput.selectedItem}
          type={MEDIA_TYPES.SEARCH}
          query={formInput.query}
        />
      )}
    </>
  );
};
