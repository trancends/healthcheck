import { Routes } from '@angular/router';
import { HealthCheckComponent } from './health-check/health-check.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'fetch-data',
    loadComponent: () =>
      import('./fetch-data/fetch-data.component').then(
        (m) => m.FetchDataComponent,
      ),
  },
  {
    path: 'health-check',
    component: HealthCheckComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
