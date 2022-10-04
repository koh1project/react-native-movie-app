import React from 'react';
import { Flex, Text } from 'native-base';
import { PaginationButton } from '../buttons';

export const Pagination = ({ onChange, page }) => {
  const handleChange = (newPage) => {
    onChange(newPage);
  };

  return (
    <Flex direction="row" justifyContent="space-between" mx={4} pb={3}>
      <PaginationButton label="Prev" handleChange={() => handleChange(1)} />
      <Text alignSelf="center">Page {page}/2</Text>
      <PaginationButton label="Next" handleChange={() => handleChange(2)} />
    </Flex>
  );
};
