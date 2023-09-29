export interface IEnvironment {
  production: boolean;
  nodeApiBaseUrl: string;
  // baseUrl: string;
  goApiBaseUrl: string;
  // GA?: string;
  [key: string]: boolean | string | number;
}