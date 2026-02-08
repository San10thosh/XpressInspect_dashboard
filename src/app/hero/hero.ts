import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  // Config for the floating glass icons
  floatingIcons = [
    { icon: 'analytics', top: '15%', left: '10%', delay: '0s' },
    { icon: 'verified_user', top: '25%', right: '15%', delay: '1s' },
    { icon: 'cloud_upload', top: '55%', left: '18%', delay: '2s' },
    { icon: 'assignment', top: '45%', right: '8%', delay: '1.5s' }
  ];
}