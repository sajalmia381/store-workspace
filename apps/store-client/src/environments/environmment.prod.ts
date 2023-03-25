const domain = 'https://api.storerestapi.com';

export const environment = {
  production: true,
  apiBaseUrl: domain,
  baseUrl: domain,
  v1BaseUrl: domain + "/v1",
  GA: process.env['STORE_GA']
};
