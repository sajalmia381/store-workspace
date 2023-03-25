export interface IEnvironment {
  production: boolean;
  nodeApiBaseUrl: string;
  // baseUrl: string;
  GoApiBaseUrl: string;
  // GA?: string;
  [key: string]: boolean | string | number;
}