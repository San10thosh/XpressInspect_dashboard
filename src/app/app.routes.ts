import { Routes } from '@angular/router';
import { HomeComponent } from './home/home'; // Your Landing Page
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout';
import { InspectorCardsComponent } from './inspector-cards/inspector-cards';

export const routes: Routes = [
  // 1. Landing Page (Public)
  { 
    path: '', 
    component: HomeComponent 
  },

  // 2. Dashboard Area (Private / Admin)
  {
    path: 'dashboard',
    component: DashboardLayoutComponent, // Loads the Sidebar Shell
    children: [
      { path: '', redirectTo: 'inspector-cards', pathMatch: 'full' }, // Default to cards
      { path: 'inspector-cards', component: InspectorCardsComponent },
      // You can add more pages here later, e.g.,
      // { path: 'approvals', component: ApprovalsComponent }
    ]
  },

  // Catch-all
  { path: '**', redirectTo: '' }
];