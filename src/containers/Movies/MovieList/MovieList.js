import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ list, dataEmpty }) => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        spacingX={8}
        spacingY={20}
        maxHeight="700px"
        overflowY="auto"
        overflowX="hidden"
      >
        {dataEmpty && <Text color="gray.200">No data found</Text>}

        {list?.results?.map((result) => (
          <MovieItem key={result?.id} result={result} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieList;
