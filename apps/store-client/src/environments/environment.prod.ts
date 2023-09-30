const BASE_URL = 'https://api.storerestapi.com';

export const environment = {
  production: true,
  apiBaseUrl: BASE_URL,
  baseUrl: BASE_URL,
  v1BaseUrl: BASE_URL + "/v1",
  GA: process.env['STORE_GOOGLE_ANALYTIC_ID']
};
