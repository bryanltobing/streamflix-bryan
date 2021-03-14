import {
  Badge,
  Box,
  Divider,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import React from 'react';
import { HEADING2, PARAGRAPH } from 'token/fontSize';

const DetailRight = ({ movieData }) => {
  return (
    <Box
      height={600}
      overflowY="auto"
      backgroundColor={'gray.700'}
      width={['100%', '60%']}
      padding={6}
      color="gray.200"
      boxShadow="dark-lg"
    >
      <Box>
        <Text fontSize={HEADING2} fontWeight="medium">
          Description
        </Text>
        <Divider my={2} />
        <Text fontSize={PARAGRAPH} fontWeight="normal">
          {!!movieData?.overview
            ? movieData?.overview
            : 'No Description Provided'}
        </Text>
      </Box>
      <Box marginTop={8}>
        <Text fontSize={HEADING2} fontWeight="medium">
          Release Date
        </Text>
        <Divider my={2} />
        <Box my={4} display="flex" alignItems="center">
          <Text fontSize={PARAGRAPH} fontWeight="normal" marginRight="4">
            {movieData?.release_date}
          </Text>
          <Badge colorScheme="green">{movieData?.status}</Badge>
        </Box>
      </Box>
      <Box marginTop={8}>
        <Text fontSize={HEADING2} fontWeight="medium">
          Production Company
        </Text>
        <Divider my={2} />
        <Box my={4} display="flex" alignItems="center">
          <UnorderedList>
            {movieData?.production_companies?.map((company) => (
              <ListItem key={company?.id}>{company?.name}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
      <Box marginTop={8}>
        <Text fontSize={HEADING2} fontWeight="medium">
          Language
        </Text>
        <Divider my={2} />
        <Box my={4} display="flex" alignItems="center">
          <UnorderedList>
            {movieData?.spoken_languages?.map((language) => (
              <ListItem key={language?.iso_639_1}>{language?.name}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
      <Box marginTop={8}>
        <Text fontSize={HEADING2} fontWeight="medium">
          Duration
        </Text>
        <Divider my={2} />
        <Box my={4} display="flex" alignItems="center">
          <Text fontSize={PARAGRAPH} fontWeight="normal" marginRight="4">
            {movieData?.runtime} minutes
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailRight;
