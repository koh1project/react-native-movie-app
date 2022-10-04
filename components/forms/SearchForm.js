//@ts-check
import React, { useState } from 'react';
import { Box, Button, HStack, Icon, Input, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Filters } from '../filters';
import { MEDIA_TYPES, SEARCH_TYPES } from '../../const';

export const SearchForm = ({ onSubmit, onReset }) => {
  const [selectedItem, setSelectedItem] = useState(SEARCH_TYPES.MULTI);
  const [query, setQuery] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = () => {
    if (!query.trim()) {
      setErrorMsg('Movie/TV show name is required');
      return;
    }

    setErrorMsg('');
    onReset((prev) => !prev);
    onSubmit({ query, selectedItem });
  };

  return (
    <>
      <Text mb={2}>
        Search Movie/TV Show<Text style={{ color: '#ff0000' }}>*</Text>
      </Text>
      <Input
        size="md"
        w="90%"
        backgroundColor="#e4e4e7"
        InputLeftElement={
          <Icon
            as={<Ionicons name="search" />}
            size={5}
            ml="2"
            color="#2c3e50"
          />
        }
        placeholder="i.e. James Bond, CSI"
        placeholderTextColor="#2c3e50"
        onChangeText={(text) => setQuery(text)}
        isRequired
        borderWidth={1}
        borderColor={errorMsg ? '#ff0000' : '#e4e4e7'}
      />

      <Text mt={3}>
        Choose Search Type<Text style={{ color: '#ff0000' }}>*</Text>
      </Text>
      <HStack space={5} mt={1} mr={7}>
        <Box w="2/4">
          <Filters
            optionItems={SEARCH_TYPES}
            selectedItem={selectedItem}
            handleOnChange={setSelectedItem}
            hasError={errorMsg ? true : false}
          />
        </Box>
        <Box w="2/5">
          <Button
            leftIcon={
              <Icon as={Ionicons} name={MEDIA_TYPES.SEARCH} size="sm" />
            }
            size="lg"
            mt={-1}
            onPress={handleSubmit}
          >
            Search
          </Button>
        </Box>
      </HStack>
      <Text color="#ff0000" mt={2}>
        {errorMsg}
      </Text>
    </>
  );
};
