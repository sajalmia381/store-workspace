### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:16.18.1-alpine as builder

ARG APP_NAME

WORKDIR /ng-app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx nx build ${APP_NAME} --configuration=production --base-href /${APP_NAME}/

### STAGE 2: Setup ###
FROM nginx:1.21.5-alpine

ARG APP_NAME

ENV API_BASE_URL ''
ENV STORE_GOOGLE_ANALYTIC_ID ''

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/apps/${APP_NAME} /usr/share/nginx/html

## Copy our default nginx config
COPY nginx/default.nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir /app
COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh
RUN sed -i -e 's/\r$//' /app/run.sh

ENTRYPOINT ["bin/sh", "/app/run.sh"]