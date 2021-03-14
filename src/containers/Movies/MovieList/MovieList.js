import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import MovieItem from './MovieItem';
import { motion } from 'framer-motion';

const MovieList = ({ list, dataEmpty }) => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          spacingX={8}
          spacingY={20}
          maxHeight="700px"
          overflowY="auto"
          overflowX="hidden"
          padding={5}
        >
          {dataEmpty && <Text color="gray.200">No data found</Text>}

          {list?.results?.map((result) => (
            <MovieItem key={result?.id} result={result} />
          ))}
        </SimpleGrid>
      </motion.div>
    </>
  );
};

export default MovieList;
