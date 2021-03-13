import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import { HEADING, LOGO } from 'token/fontSize';

const NavigationBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height={{ base: '15vh', md: '10vh' }}
      as="nav"
      backgroundColor="gray.700"
      color="gray.200"
      direction={{ base: 'column', md: 'row' }}
      padding={5}
    >
      <Box paddingX={[8, 16]}>
        <Link to="/">
          <Text fontSize={LOGO} userSelect="none" fontWeight="bold">
            STREAMFLIX
          </Text>
        </Link>
      </Box>
      <Stack
        paddingX={[8, 16]}
        direction="row"
        spacing={10}
        fontWeight="medium"
      >
        <Link to="/trending">
          <Text fontSize={HEADING}>Trending</Text>
        </Link>
        <Text fontSize={HEADING}>Explore</Text>
      </Stack>
    </Flex>
  );
};

export default NavigationBar;
