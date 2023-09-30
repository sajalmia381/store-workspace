#!/bin/bash

echo '[INFO] Starting Config Initialization'

echo $API_BASE_URL
echo $STORE_GOOGLE_ANALYTIC_ID

find /usr/share/nginx/html/main*.js -type f -exec sed -i 's@API_BASE_URL@'"$API_BASE_URL"'@' {} +
find /usr/share/nginx/html/main*.js -type f -exec sed -i 's@STORE_GOOGLE_ANALYTIC_ID@'"$STORE_GOOGLE_ANALYTIC_ID"'@' {} +

echo '[INFO] Config Initialization Completed'

echo '[INFO] Starting Nginx'

nginx -g 'daemon off;'
