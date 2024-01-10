#NODE BUILDER (STAGE-0) RUN TO BUILD THE PROD READY CODE
FROM node:16.13.1-alpine as builder
ARG PUBLIC_URL=/productportal
ENV PUBLIC_URL=${PUBLIC_URL}
RUN mkdir -p /opt/web/portal
WORKDIR /opt/web/portal/

# Copy package.json and run install to use docker caching
# when possible to avoid re-run of npm install step if nothing in
# package.json changed
RUN echo ${PUBLIC_URL}
COPY ./package.json .
COPY yarn.lock .
RUN yarn install --production=false

# Copy the rest of the project and build it
COPY . .
RUN yarn build
WORKDIR /opt/web/portal/build
RUN touch _redirects
RUN echo "/*  /index.html  200" > _redirects

#NGINX STAGE-1 TO HOST THE CODE OVER NGINX
FROM nginx:1.20.2-alpine
ARG PUBLIC_URL=/productportal
ENV PUBLIC_URL=${PUBLIC_URL}
WORKDIR /etc/nginx
COPY --from=builder /opt/web/portal/nginx.conf.template .
RUN envsubst '${PUBLIC_URL}' < nginx.conf.template > nginx.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
RUN mkdir -p productportal
COPY --from=builder /opt/web/portal/build ./productportal
