import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'docs',
    loadChildren: () => import('./doc/doc.module').then(m => m.DocModule)
  },
];
