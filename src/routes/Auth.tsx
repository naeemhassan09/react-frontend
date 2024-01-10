import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { APP, SIDEBAR_ROUTES } from 'src/constants/navigation-routes';
import { getIsLoggedIn } from '../store/selectors/features/auth';
import PublicRoutes from './public-routes';

/*
* TODO: when user loggedIn he/she unable to goto public routes
*  ie: ('/about', '/contact', 'any other public route')
*/
const Auth = () => {
  const loggedIn = useSelector(getIsLoggedIn);

  return loggedIn ? (
    <Redirect to={ `${APP}${SIDEBAR_ROUTES.PRODUCTS}` } />
  ) : (
    <PublicRoutes />
  );
};

export default memo(Auth);
