const BASE_URL = 'https://api.storerestapi.com';
// const BASE_URL = process.env['API_BASE_URL'];

export const environment = {
  production: true,
  nodeApiBaseUrl: BASE_URL,
  
  baseUrl: BASE_URL,
  GoApiBaseUrl: BASE_URL + "/v1",
  GA: process.env['STORE_GOOGLE_ANALYTIC_ID']
};
