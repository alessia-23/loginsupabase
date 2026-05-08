import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then(m => m.TabsPage),

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./tabs/tabs.routes').then(m => m.routes)
      }
    ],

    canActivate: [authGuard]
  },

  {
    path: 'detalle/:id',
    loadComponent: () =>
      import('./pages/detalle/detalle.page').then(m => m.DetallePage),

    canActivate: [authGuard]
  }
];