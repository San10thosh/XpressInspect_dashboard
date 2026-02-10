import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class FeaturesComponent {
  activeIndex = 0;
  isScrolling = false; // To prevent rapid-fire scrolling

  features = [
    {
      title: 'Centralized Inspector Registry',
      icon: 'groups',
      description: 'A complete, searchable directory of all registered personnel. Drill down into detailed profiles to view work history, assessment forms, and approval timelines.',
      points: ['Advanced Search & Filtering', 'Full Profile & Document Access', 'Status Management', 'Real-time Editing']
    },
    {
      title: 'Streamlined Onboarding',
      icon: 'person_add',
      description: 'Manage the entire recruitment lifecycle from the 6-step onboarding wizard to final safety verification with a dedicated approval dashboard.',
      points: ['6-Step Wizard', 'Automated Safety Checks', 'Visual Timeline', 'One-click Approvals']
    },
    {
      title: 'Smart Authorization Governance',
      icon: 'verified_user',
      description: 'Monitor compliance with automated tracking. The system alerts you to expiring certifications and manages the renewal workflow effortlessly.',
      points: ['Real-time Expiry Alerts', 'Automated Notifications', 'Device-Specific Authorization', 'Paperless Renewals']
    },
    {
      title: 'Secure Digital Credentials',
      icon: 'badge',
      description: 'Generate and manage official work authorization cards. These cards are provided to inspectors as their primary method of on-site authentication.',
      points: ['Instant QR Verification', 'Tamper-proof Signatures', 'Bulk Download', 'Visual Card Gallery']
    }
  ];

  setActive(index: number) {
    this.activeIndex = index;
  }

  // --- NEW: Scroll Handler ---
  handleScroll(event: WheelEvent) {
    event.preventDefault(); // Stop the whole page from scrolling when hovering here

    if (this.isScrolling) return; // Wait if we just scrolled

    this.isScrolling = true;
    
    // Detect Direction
    if (event.deltaY > 0) {
      // Scroll Down -> Next Item
      this.activeIndex = (this.activeIndex + 1) % this.features.length;
    } else {
      // Scroll Up -> Previous Item
      this.activeIndex = (this.activeIndex - 1 + this.features.length) % this.features.length;
    }

    // Reset lock after 600ms (smooth transition time)
    setTimeout(() => {
      this.isScrolling = false;
    }, 600);
  }
}