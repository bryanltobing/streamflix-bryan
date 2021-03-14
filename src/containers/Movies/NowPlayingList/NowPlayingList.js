import React, { useState, useEffect, useMemo } from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { getNowPlayingMovies } from 'fetcher/movie';
import { useHistory } from 'react-router';
import queryString from 'query-string';
import MoviesHeader from 'components/movies/MoviesHeader';
import MovieList from '../MovieList/MovieList';

const NowPlayingList = () => {
  const history = useHistory();
  const queryUrl = queryString.parse(history?.location?.search);
  const [nowPLayingData, setNowPlayingData] = useState({});
  const [dataEmpty, setDataEmpty] = useState(false);

  const page = useMemo(() => {
    if (queryUrl?.page && Number(queryUrl?.page) > 0) {
      return Number(queryUrl?.page);
    } else {
      return 1;
    }
  }, [queryUrl?.page]);

  useEffect(() => {
    getNowPlayingMovies({
      page,
      region: 'ID',
      language: 'id-ID',
    }).then((data) => {
      setNowPlayingData(data);

      if (data?.results?.length < 1) {
        setDataEmpty(true);
      } else {
        setDataEmpty(false);
      }
    });
  }, [page]);

  return (
    <Box padding={['6', '8']} boxShadow="dark-lg" backgroundColor="gray.700">
      <MoviesHeader
        page={page}
        movieData={nowPLayingData}
        title="Now Playing"
      />
      <Divider orientation="horizontal" colorScheme="gray" marginY="4" />
      <MovieList list={nowPLayingData} dataEmpty={dataEmpty} />
    </Box>
  );
};

export default NowPlayingList;
