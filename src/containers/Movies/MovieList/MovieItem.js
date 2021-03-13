import { Image, Box, Text } from '@chakra-ui/react';
import React from 'react';

const MovieItem = ({ result }) => {
  return (
    <Box backgroundColor="gray.200" overflow="hidden">
      <Image
        src={process.env.REACT_APP_IMAGE_URL + result?.poster_path}
        width="full"
        height="300px"
        objectFit="cover"
        userSelect="none"
        fallbackSrc="https://betravingknows.com/wp-content/uploads/2017/06/video-movie-placeholder-image-grey.png"
      />
      <Box padding="4">
        <Text color="gray.700" fontWeight="bold" fontSize={14}>
          {result?.title ?? result?.name}
        </Text>
      </Box>
    </Box>
  );
};

export default MovieItem;
