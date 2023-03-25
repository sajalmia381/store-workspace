import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const defaultLayoutRoutes: Routes = [
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
]

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: defaultLayoutRoutes
  }
];
