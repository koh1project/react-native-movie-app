//@ts-check
import React, { useEffect } from "react";
import { Box, HStack, StatusBar, Text } from "native-base";
import { getMoviesByType } from "../../services/api";

export const Header = () => {
  useEffect(() => {
    getMoviesByType()
      .then(movies => {
        console.log('movies: ', movies);

      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box safeAreaTop>
        <HStack>
          <Text>Movie</Text>
        </HStack>
      </Box>
    </>
  );
};
