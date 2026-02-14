import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// Go up one level (..) to 'app', then into 'sidebar'
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent], // Import Sidebar & RouterOutlet
  template: `
    <div class="dashboard-wrapper">
      
      <app-sidebar></app-sidebar>

      <main class="content-area">
        <router-outlet></router-outlet>
      </main>

    </div>
  `,
  styles: [`
    .dashboard-wrapper {
      display: flex;
      height: 100vh;
      overflow: hidden; /* Prevent body scroll, let content scroll */
    }

    .content-area {
      flex: 1; /* Take remaining width */
      margin-left: 280px; /* SAME WIDTH as Sidebar */
      height: 100%;
      overflow-y: auto; /* Scroll inside this area only */
      background-color: #f8fafc;
    }
  `]
})
export class DashboardLayoutComponent {}