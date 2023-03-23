import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'v1',
    loadChildren: () =>
      import('store-client-go/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('store-client-node/Module').then((m) => m.RemoteEntryModule),
  },
];
