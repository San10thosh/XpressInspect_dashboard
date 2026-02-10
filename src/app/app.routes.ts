import { Routes } from '@angular/router';
import { HomeComponent } from './home/home'; // Import the new container

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Point default path to Home
  { path: '**', redirectTo: '' }
];