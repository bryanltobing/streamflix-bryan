import React from 'react';
import { HEADING } from 'token/fontSize';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { Flex, Stack, Text } from '@chakra-ui/react';

const UndynamicMovieHeader = ({ page, movieData, title, setPage }) => {
  return (
    <Flex justifyContent="space-between">
      <Text fontSize={HEADING} fontWeight="semibold" color="gray.200">
        {title}
      </Text>
      <Stack direction={['column', 'row']}>
        {page !== 1 && (
          <Button
            rightIcon={<ArrowBackIcon />}
            color="gray.200"
            variant="outline"
            _hover={{
              color: 'gray.700',
              backgroundColor: 'gray.200',
            }}
            onClick={() => setPage((page) => page - 1)}
          >
            Back
          </Button>
        )}

        {page < movieData?.total_pages && (
          <Button
            rightIcon={<ArrowForwardIcon />}
            color="gray.200"
            variant="outline"
            _hover={{
              color: 'gray.700',
              backgroundColor: 'gray.200',
            }}
            onClick={() => setPage((page) => page + 1)}
          >
            Next
          </Button>
        )}
      </Stack>
    </Flex>
  );
};

export default UndynamicMovieHeader;
