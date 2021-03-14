import { Box, Divider } from '@chakra-ui/layout';
import { getIdFromSlug } from 'common/text';
import UndynamicMovieHeader from 'components/movies/UndynamicMovieHeader';
import { getSimilarMovie } from 'fetcher/movie';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import MovieList from '../MovieList/MovieList';

const SimilarMovies = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const movieId = getIdFromSlug(id);
  const [similarMoviesData, setSimilarMoviesData] = useState({});
  const [dataEmpty, setDataEmpty] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getSimilarMovie({ id: movieId, language: 'id-ID', page }).then((data) => {
      setSimilarMoviesData(data);

      if (data?.results?.length < 1) {
        setDataEmpty(true);
      } else {
        setDataEmpty(false);
      }
    });
  }, [movieId, page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  return (
    <Box
      padding={['6', '8']}
      boxShadow="dark-lg"
      backgroundColor="gray.700"
      marginY={8}
    >
      <UndynamicMovieHeader
        page={page}
        setPage={setPage}
        movieData={similarMoviesData}
        title="Similar Movies"
      />
      <Divider orientation="horizontal" colorScheme="gray" marginY="4" />
      <MovieList list={similarMoviesData} dataEmpty={dataEmpty} />
    </Box>
  );
};

export default SimilarMovies;
