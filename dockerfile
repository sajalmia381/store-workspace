## STAGE 1: Build app
FROM node:16.18.1-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prod && npm run prod:go && npm run prod:node

## STAGE 2: Setup Server
FROM nginx:1.21.5-alpine

# Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/store-client-node.conf /etc/nginx/conf.d/store-client-node.conf
COPY nginx/store-client-go.conf /etc/nginx/conf.d/store-client-go.conf

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/apps/store-client /usr/share/nginx/html
COPY --from=builder /app/dist/apps/store-client-node /usr/share/nginx/store-client-node
COPY --from=builder /app/dist/apps/store-client /usr/share/nginx/store-client-go

COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh

EXPOSE 8000
EXPOSE 8001
EXPOSE 8002

ENTRYPOINT ["bin/sh", "/app/run.sh"]