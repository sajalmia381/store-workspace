const domain = 'https://api.storerestapi.com';

export const environment = {
  production: true,
  nodeApiBaseUrl: domain,
  baseUrl: domain,
  GoApiBaseUrl: domain + "/v1",
  GA: process.env['STORE_GA']
};
