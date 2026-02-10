import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';         // Import Hero
import { FeaturesComponent } from '../features/features'; // Import Features

@Component({
  selector: 'app-home',
  standalone: true,
  // Import both components here so they can be used in the template
  imports: [CommonModule, HeroComponent, FeaturesComponent],
  template: `
    <main>
      <app-hero></app-hero>
      <app-features></app-features>
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