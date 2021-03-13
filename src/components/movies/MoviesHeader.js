import React from 'react';
import { HEADING } from 'token/fontSize';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';

const MoviesHeader = ({ page, nowPLayingData, title }) => {
  const { location } = useHistory();

  return (
    <Flex justifyContent="space-between">
      <Text fontSize={HEADING} fontWeight="semibold" color="gray.200">
        {title}
      </Text>
      <Stack direction={['column', 'row']}>
        {page !== 1 && (
          <Link to={`${location?.pathname}?page=${page - 1}`}>
            <Button
              rightIcon={<ArrowBackIcon />}
              color="gray.200"
              variant="outline"
              _hover={{
                color: 'gray.700',
                backgroundColor: 'gray.200',
              }}
            >
              Back
            </Button>
          </Link>
        )}

        {page < nowPLayingData?.total_pages && (
          <Link to={`${location?.pathname}?page=${page + 1}`}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              color="gray.200"
              variant="outline"
              _hover={{
                color: 'gray.700',
                backgroundColor: 'gray.200',
              }}
            >
              Next
            </Button>
          </Link>
        )}
      </Stack>
    </Flex>
  );
};

export default MoviesHeader;
