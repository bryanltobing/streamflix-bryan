import { Stack, useToast } from '@chakra-ui/react';
import { getMoviePrice } from 'common/currency';
import { getIdFromSlug } from 'common/text';
import ConfirmationModal from 'components/modal/ConfirmationModal';
import DetailLeft from 'components/onemovie/DetailLeft';
import DetailRight from 'components/onemovie/DetailRight';
import GlobalContext from 'context/GlobalContext';
import { getDetailMovie } from 'fetcher/movie';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useRouteMatch } from 'react-router';

const OneMovie = () => {
  const toast = useToast();
  const {
    params: { id },
  } = useRouteMatch();

  const movieId = id;
  const isMovieOwned = useMemo(() => {
    const movieOwnedStorage = sessionStorage.getItem('movieOwned');
    if (
      movieOwnedStorage &&
      movieOwnedStorage.startsWith('[') &&
      JSON.parse(movieOwnedStorage)?.length > 0
    ) {
      return JSON.parse(movieOwnedStorage)?.includes(getIdFromSlug(movieId));
    } else {
      return false;
    }
  }, [movieId]);

  const [movieData, setMovieData] = useState({});
  const [movieOwned, setMovieOwned] = useState(isMovieOwned);
  const [confirmBuy, setConfirmBuy] = useState(false);
  const { user, setUser } = useContext(GlobalContext);

  useEffect(() => {
    getDetailMovie({ id: getIdFromSlug(movieId), language: 'id-ID' })
      .then((data) => setMovieData(data))
      .catch(() => {});
  }, [movieId]);

  const price = useMemo(() => {
    return getMoviePrice(movieData?.vote_average);
  }, [movieData?.vote_average]);

  const handleBuyTheMovie = () => {
    if (user?.balance >= price) {
      const movieOwnedStorage =
        sessionStorage.getItem('movieOwned') &&
        sessionStorage.getItem('movieOwned').startsWith('[');

      if (movieOwnedStorage) {
        const movieOwnedStorageData = JSON.parse(
          sessionStorage.getItem('movieOwned')
        );
        console.log(movieOwnedStorageData);
        movieOwnedStorageData?.push(getIdFromSlug(movieId));

        sessionStorage.setItem(
          'movieOwned',
          JSON.stringify(movieOwnedStorageData)
        );
      } else {
        const movieIdOwned = [getIdFromSlug(movieId)];
        sessionStorage.setItem('movieOwned', JSON.stringify(movieIdOwned));
      }

      setUser((state) => {
        return {
          ...state,
          balance: state?.balance - price,
        };
      });

      const userStorage = JSON.parse(sessionStorage.getItem('user'));
      const updateUserStorage = {
        ...userStorage,
        balance: userStorage?.balance - price,
      };
      sessionStorage.setItem('user', JSON.stringify(updateUserStorage));

      toast({
        title: 'Success',
        description: 'The movie was successfully purchased',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setMovieOwned(true);
    } else {
      toast({
        title: 'Failed',
        description: 'Your balance is insufficient',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

    setConfirmBuy(false);
  };

  return (
    <Stack direction={['column', 'row']} spacing={['6']}>
      <DetailLeft
        movieData={movieData}
        price={price}
        setConfirmBuy={setConfirmBuy}
        movieOwned={movieOwned}
      />
      <DetailRight movieData={movieData} />

      <ConfirmationModal
        isOpen={confirmBuy}
        setIsOpen={setConfirmBuy}
        title="Buy Movie Confirmation"
        content="Are you sure want to buy this movie?"
        confirmAction={handleBuyTheMovie}
      />
    </Stack>
  );
};

export default OneMovie;
