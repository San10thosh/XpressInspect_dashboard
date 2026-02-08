import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero';

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Show Hero by default
  // { path: 'dashboard', component: DashboardComponent }, // You will add this later
  { path: '**', redirectTo: '' } // Redirect unknown paths to home
];