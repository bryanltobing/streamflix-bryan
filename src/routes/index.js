import React, { useCallback, useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import ModalAuthentication from 'components/modal/ModalAuthentication';
import { isAuthenticatedValidation } from 'common/auth';
import Profile from 'containers/Profile/Profile';
import GlobalContext from 'context/GlobalContext';
import { useToast } from '@chakra-ui/toast';

const HomePagesLoad = loadable(() => import('pages/HomePages'));
const TrendingPagesLoad = loadable(() => import('pages/TrendingPages'));
const OneMoviePagesLoad = loadable(() => import('pages/OneMoviePages'));
const ExplorePagesLoad = loadable(() => import('pages/ExplorePages'));

const Routes = () => {
  const toast = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(
    isAuthenticatedValidation()
  );
  const [user, setUser] = useState({});

  const handleSubmitAuth = useCallback((fullName) => {
    if (fullName) {
      const userData = {
        fullName,
        balance: 100000,
      };
      sessionStorage.setItem('user', JSON.stringify(userData));
      setIsAuthenticated(true);
    } else {
      toast({
        title: 'Failed',
        description: 'Full name is required',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setUser(JSON.parse(sessionStorage.getItem('user')));
    } else {
      setUser({});
    }
  }, [isAuthenticated]);

  return (
    <>
      <ModalAuthentication
        isOpen={!isAuthenticated}
        handleSubmitAuth={handleSubmitAuth}
      />

      <GlobalContext.Provider value={{ user, setUser }}>
        {isAuthenticated && <Profile />}
        <Switch>
          <Route path="/" component={HomePagesLoad} exact />
          <Route path="/trending" component={TrendingPagesLoad} exact />
          <Route path="/explore" component={ExplorePagesLoad} exact />
          <Route path="/:id" component={OneMoviePagesLoad} exact />
        </Switch>
      </GlobalContext.Provider>
    </>
  );
};

export default Routes;
