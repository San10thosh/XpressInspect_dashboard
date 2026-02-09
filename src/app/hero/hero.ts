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
    { icon: 'analytics', top: '10%', left: '18%', delay: '0.12s' },
    { icon: 'verified_user', top: '15%', right: '10%', delay: '0.5s' },
    { icon: 'cloud_upload', top: '40%', left: '22%', delay: '1.5s' },
    { icon: 'qr_code', top: '25%', left: '10%', delay: '2s' },
    { icon: 'enhanced_encryption', top: '40%', right: '18%', delay: '1.5s' }
  ];
}