import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NotFound from '../components/not-found';

/*
* This is the route utility component used for generating
* routes and child routes it only requires routes array and basePath
*/
function MapAllowedRoutes({routes, basePath, isAddNotFound} :
  { routes: TObject, basePath: string, isAddNotFound: boolean}) {
  const match = useRouteMatch(basePath);
  return (
    <Switch>
      { routes.map((route: TObject) => {
        /*
				* some variables are used by below code
				* some are not used by the code but destructure due to remove from rest object
				* just make sure that rest object only contain props that supported by react-router's route component
				* you may find props list here https://reactrouter.com/web/api/Route
				*/
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { path, component: Component, children, title, permission, ...rest } = route;
        return (
          <Route
            { ...rest }
            key={ path }
            path={ `${match?.path}${path}` }
          >
            <Component>
              { children }
            </Component>
          </Route>
        );
      }) }
      { isAddNotFound && <Route><NotFound /></Route> }
    </Switch>
  );
}

export default memo(MapAllowedRoutes);
