import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        loadComponent: () =>
            import('../home/home.page').then(m => m.HomePage)
    },
    {
        path: 'catalogo',
        loadComponent: () =>
            import('../pages/catalogo/catalogo.page').then(m => m.CatalogoPage)
    },
    {
        path: 'camara',
        loadComponent: () =>
            import('../pages/camara/camara.page').then(m => m.CamaraPage)
    },
    {
        path: 'perfil',
        loadComponent: () =>
            import('../pages/perfil/perfil.page').then(m => m.PerfilPage)
    }
];