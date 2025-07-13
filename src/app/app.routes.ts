import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dropdown',
    loadChildren: () => import('./pages/dropdown-hub/dropdown-hub.route').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: 'dropdown',
    pathMatch: 'full'
  }
];
