import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dropdown', loadComponent: () => import('./pages/dropdown/dropdown.component').then(m => m.DropdownComponent) },
  { path: '', redirectTo: '/dropdown', pathMatch: 'full' }
];
