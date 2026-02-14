import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar'; 
import { FeaturesComponent } from '../features/features'; // Import Features
import { SystemFeaturesComponent } from '../system-features/system-features'; // Import System Features

@Component({
  selector: 'app-home',
  standalone: true,
  // Import both components here so they can be used in the template
  imports: [CommonModule, NavbarComponent, FeaturesComponent, SystemFeaturesComponent],
  template: `
    <main>
      <app-navbar></app-navbar>
      <app-features></app-features>
      <app-system-features></app-system-features>
    </main>
  `,
  styles: [`
    main {
      display: block;
      width: 100%;
    }
  `]
})
export class HomeComponent {}