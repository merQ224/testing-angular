import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dropdown', loadComponent: () => import('./pages/dropdown/dropdown.component').then(m => m.DropdownComponent) },
  { path: 'dropdown-smooth', loadComponent: () => import('./pages/custom-select-smooth-popover/custom-select-smooth-popover.component').then(m => m.CustomSelectSmoothPopoverComponent) },
  { path: 'dropdown-custom', loadComponent: () => import('./pages/custom-dropdown/custom-dropdown.component').then(m => m.CustomDropdownComponent) },
  { path: '', redirectTo: '/dropdown', pathMatch: 'full' }
];
