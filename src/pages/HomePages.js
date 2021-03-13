import { Box } from '@chakra-ui/layout';
import NowPlayingList from 'containers/Movies/NowPlayingList/NowPlayingList';
import React from 'react';

const HomePages = () => {
  return (
    <Box>
      <NowPlayingList />
    </Box>
  );
};

export default HomePages;
