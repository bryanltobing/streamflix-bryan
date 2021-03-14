import { Box } from '@chakra-ui/layout';
import React from 'react';

const BadgeTag = ({ children }) => {
  return (
    <Box
      backgroundColor="gray.700"
      color="gray.200"
      padding={2}
      marginRight={2}
      marginBottom={2}
    >
      {children}
    </Box>
  );
};

export default BadgeTag;
