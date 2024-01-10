# Product Portal

Mirco-frontend for  Shopify - Management - Application 

![CI]

## Setup React Project

This project is forked from  ReactJS Boilerplate.

> Note: We use yarn as default package manager for this repository.

### Quick Start
- Make sure that you have node.js and yarn installed.
- Clone this repo using `git clone git@github.com:`.
- Change directory `internalerp`
- Create `.env` file according to [.env.template](./.env.template).
- Install all dependencies using `yarn install`.

### Development Build
- `yarn start`
### Production Build
- `yarn build`
### Run on Docker
- #### Development
  - `yarn docker-dev`
  - Run the container: docker run -p 3000:3000 app-dev:latest

- #### Production
  - `yarn docker-prod`
  - Run the container: docker run -p 8080:80 app-prod:latest
## Sentry Integration

[Sentry](https://sentry.io/) is a self-hosted and cloud-based application monitoring that helps software teams see clearer, solve quicker, & learn continuously. We will integrate it to report unhandled exceptions.

<details>
  <summary>Click to expand!</summary>

- Create an account on [Sentry](https://sentry.io/)
- Sentry provides various options to create a new project, create a React project 
- After creation, you would be navigated to setup page. There you can find your dsn key tobe used in configuration
- Dependencies for sentry `(@sentry/react @sentry/tracing)` are already added in the boilerplate
- Save your dsn key from sentry as `REACT_APP_SENTRY_DSN` in `.env` file
- Initialize Sentry as early as possible in your app, preferably in root file (`index.ts` or `app.ts`) 
``` 
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN, # this is your dsn key from sentry project
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));
```
- After configuration try creating any error in your app e.g
```
<button onClick={methodDoesNotExist}>Break the world</button>;
```
#### This error would be reported in your sentry project under issues

</details>

## Tools & Technologies

Following table shows list of tools used in this project.

| Tool / Tech       | Purpose / Description                         |     Version       |
|-------------------|-----------------------------------------------|-------------------|
| TypeScript        | Typings for JavaScript                        |      4.5.5        |
| ESLint + TSLint   | Linting all codebase for best practices       |      8.9.9        |
| React-Router-DOM  | Navigation Management                         |      5.1.2        |
| Chakra UI         | UI Components library                         |      2.3.4       |
| Tanstack/react-table   | Data table for rendering large row/cell data. |        -          |
| Redux-Toolkit     | Standardized way of writing redux logic       |      1.7.2        |
| Redux-Persist     | Data persistence                              |      6.0.0        |
| Error-Boundary    | Catch and display JS errors                   |      3.1.4        |
| i18next           | Internationalization                          |      21.6.11      |
| Jest + React-Testing + Cypress | Unit testing                     |  5.16.2 + 12.1.2 + 9.4.1 |
| Sentry            | Error tracking with stacktraces               |      6.17.8       |
| Husky             | Pre-Commit and Pre-Push hooks                 |      7.0.4        |
| Gitlab CI/CD      | Run lint + compile + Test pipelines           |      ---          |

## Coding/Development
TBA


## RBAC (Role Base Access Control)

Followings are the details about how RBAC is implemented in routes

<details>
  <summary>Click to expand!</summary>

- Base file for routing is ```src/routes/index.tsx```
- Routes are divided in 2 modules ```private-routes.tsx``` & ```public-routes.tsx``` respectively
- ```src/constants/roles.ts``` contains enums for multiple user roles
-  ```src/routes/private-route-config.ts``` is config for all the permission based routing 
- ```src/routes/map-allowed-routes.tsx``` is where we map only allowed routes for a specific user to render

</details>

## Micro Front-End Architecture
TBA

## Learn More
<details>
  <summary>Click to expand!</summary>

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>