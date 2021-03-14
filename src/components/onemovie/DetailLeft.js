import { Button } from '@chakra-ui/button';
import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { idrFormat } from 'common/currency';
import BadgeTag from 'components/_common/BadgeTag';
import React from 'react';
import { HEADING, LOGO } from 'token/fontSize';

const DetailLeft = ({ movieData, price, setConfirmBuy, movieOwned }) => {
  return (
    <Flex width={['100%', '40%']} height={['full', '300px']} direction="column">
      <Image
        src={
          process.env.REACT_APP_IMAGE_URL +
          `/${movieData?.backdrop_path ?? movieData?.poster_path}`
        }
        objectFit="cover"
        width="full"
        maxHeight="400px"
      />
      <Text
        paddingTop={4}
        textTransform="uppercase"
        fontWeight="bold"
        fontSize={[HEADING, HEADING, LOGO]}
        color="gray.700"
        textShadow="1px 1px #63171B"
        textAlign={['center', 'left']}
      >
        {movieData?.title ?? movieData?.name}
      </Text>
      <Text textAlign={['center', 'left']}>{idrFormat(price)}</Text>
      <Flex my={4} flexWrap="wrap" justifyContent={['center', 'flex-start']}>
        {movieData?.genres?.map((genre) => (
          <BadgeTag key={genre?.id}>{genre?.name}</BadgeTag>
        ))}
      </Flex>
      <Text
        fontSize={HEADING}
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent={['center', 'flex-start']}
      >
        {movieData?.vote_average} <StarIcon marginLeft={1} />
      </Text>

      {movieOwned ? (
        <Box marginTop={4} width="full">
          <Button
            borderRadius="0px"
            display="inline-block"
            border="1px solid #2D3748"
            width={['full', 'full', '50%']}
            disabled
          >
            You owned this movie
          </Button>
        </Box>
      ) : (
        <Box marginTop={4} width="full">
          <Button
            borderRadius="0px"
            display="inline-block"
            border="1px solid #2D3748"
            width={['full', 'full', '50%']}
            onClick={() => setConfirmBuy(true)}
          >
            Buy The Movie
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default DetailLeft;
