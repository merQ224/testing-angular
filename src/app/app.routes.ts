import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.route').then((m) => m.routes),
  },
  {
    path: 'dropdown',
    loadChildren: () => import('./pages/dropdown-hub/dropdown-hub.route').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
