import { Image, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import { getSlug, hideLongText } from 'common/text';
import styled from '@emotion/styled';
import { idrFormat } from 'common/currency';
import { useHistory } from 'react-router';

const MovieItem = ({ result }) => {
  const [entered, setEntered] = useState(false);
  const [showPrice] = useState(true);

  const price = useMemo(() => {
    const rate = result?.vote_average;
    if (rate >= 1 && rate < 3) {
      return 3500;
    } else if (rate >= 3 && rate < 6) {
      return 8250;
    } else if (rate >= 6 && rate < 8) {
      return 16350;
    } else if (rate >= 8 && rate <= 10) {
      return 21250;
    } /* else which is no rated yet set lower price */ else {
      return 3500;
    }
  }, [result]);

  const isMovieOwned = useMemo(() => {
    const movieOwnedStorage = sessionStorage.getItem('movieOwned');
    if (
      movieOwnedStorage &&
      movieOwnedStorage.startsWith('[') &&
      JSON.parse(movieOwnedStorage)?.length > 0
    ) {
      return JSON.parse(movieOwnedStorage)?.includes(result?.id?.toString());
    } else {
      return false;
    }
  }, [result?.id]);

  const [owned] = useState(isMovieOwned);

  const history = useHistory();
  const slug = result?.title ? getSlug(result?.title) : getSlug(result?.name);

  return (
    <DivMotion
      onMouseEnter={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      animate={{ scale: entered ? 1.3 : 1 }}
      onClick={() => history.push(`${result?.id}-${slug}`)}
    >
      <Image
        src={process.env.REACT_APP_IMAGE_URL + result?.poster_path}
        width="full"
        height="300px"
        objectFit="cover"
        userSelect="none"
        fallbackSrc="https://betravingknows.com/wp-content/uploads/2017/06/video-movie-placeholder-image-grey.png"
      />

      {/* ======= OWNED ======= */}
      {owned && (
        <Box position="absolute" top={5} left={5}>
          <Text color="gray.200" className="neons">
            OWNED
          </Text>
        </Box>
      )}

      {/* ======= PRICE ======= */}
      {showPrice && !owned && (
        <Box position="absolute" top={4} left={4} backgroundColor="red.900">
          <Text color="gray.200" fontWeight="semibold" padding={1}>
            {idrFormat(price).replace('Rp', 'IDR')}
          </Text>
        </Box>
      )}

      <Box
        padding="4"
        backgroundColor="gray.200"
        maxHeight="80px"
        minHeight="80px"
      >
        <Text color="gray.700" fontWeight="bold" fontSize={14}>
          {hideLongText(result?.title ?? result?.name, 35)}
        </Text>
      </Box>
    </DivMotion>
  );
};

const DivMotion = styled(motion.div)`
  position: relative;
  cursor: pointer;

  .neons {
    font-weight: bold;
    -webkit-animation: glow 2s ease-in-out infinite alternate;
    -moz-animation: glow 2s ease-in-out infinite alternate;
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      color: #fff;
      text-shadow: 0 0 10px #00fff2, 0 0 20px #00fff2, 0 0 30px #00fff2,
        0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2,
        0 0 90px #00fff2;
    }

    to {
      color: gray;
      text-shadow: 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2,
        0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 80px #00fff2,
        0 1 90px #00fff2;
    }
  }
`;

export default MovieItem;
