import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { APP } from 'src/constants/navigation-routes';
import { HealthCheck } from 'src/pages';
import { setAuthData, setAuthToken } from 'src/store/slices/features';
import { LocalStorageService } from 'src/services/local-storage';
import jwtDecode from 'jwt-decode';
import Auth from './Auth';
import PrivateRoutes from './private-routes';

const localStorageService = new LocalStorageService();

export const Router: React.FC = () =>{
  const authToken = window.location?.href?.split('token=')[1];
  const dispatch = useDispatch();

  useEffect(() => {
    if (authToken) {
      localStorageService.persist('authToken', authToken);
      const userData = jwtDecode(authToken);
      dispatch(setAuthData( { user: userData, token: authToken} ));
      dispatch(setAuthToken(authToken));
    }
  }, [authToken]);

  return (
    <BrowserRouter basename='/internalerp'>
      <Switch>
        <Route exact path='/health'>
          <HealthCheck />
        </Route>
        <Route path={ APP }>
          <PrivateRoutes />
        </Route>
        <Route path=''>
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
