import { Routes } from '@angular/router';
import { DropdownHubComponent } from './dropdown-hub.component';

export const routes: Routes = [
  {
    path: '',
    component: DropdownHubComponent,
    children: [
      {
        path: 'ionic-dropdown',
        loadComponent: () =>
          import('../../component/ionic-dropdown/ionic-dropdown.component').then((m) => m.IonicDropdownComponent),
      },
      {
        path: 'ionic-dropdown-custom',
        loadComponent: () =>
          import('../../component/ionic-dropdown-custom/ionic-dropdown-custom.component').then((m) => m.IonicDropdownCustomComponent),
      },
      {
        path: 'custom-dropdown',
        loadComponent: () =>
          import('../../component/custom-dropdown/custom-dropdown.component').then((m) => m.CustomDropdownComponent),
      },
      {
        path: '',
        redirectTo: 'ionic-dropdown',
        pathMatch: 'full',
      },
    ],
  },
];
