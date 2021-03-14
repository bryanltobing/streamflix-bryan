import { Input } from '@chakra-ui/input';
import { Box, Divider } from '@chakra-ui/layout';
import UndynamicMovieHeader from 'components/movies/UndynamicMovieHeader';
import { getMovieSearch } from 'fetcher/movie';
import React, { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList';

const ExploreList = () => {
  const [movieNameInput, setMovieNameInput] = useState('');
  const [movieData, setMovieData] = useState({});
  const [dataEmpty, setDataEmpty] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (movieNameInput) {
        getMovieSearch({
          query: movieNameInput,
          language: 'id-ID',
          page,
        }).then((data) => {
          setMovieData(data);

          if (data?.results?.length < 1) {
            setDataEmpty(true);
          } else {
            setDataEmpty(false);
          }
        });
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [movieNameInput, page]);

  return (
    <Box
      padding={['6', '8']}
      boxShadow="dark-lg"
      backgroundColor="gray.700"
      color="gray.200"
    >
      <UndynamicMovieHeader
        title="Search for movies"
        page={page}
        setPage={setPage}
        movieData={movieData}
      />
      <Divider orientation="horizontal" colorScheme="gray" marginY="4" />
      <Box my={4}>
        <Input
          placeholder="Type movie name"
          onChange={(evt) => setMovieNameInput(evt.target.value)}
        />
      </Box>
      <MovieList list={movieData} dataEmpty={dataEmpty} />
    </Box>
  );
};

export default ExploreList;
