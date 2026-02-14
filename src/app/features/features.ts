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
  isScrolling = false;

  features = [
    {
      title: 'All Inspectors',
      icon: 'groups',
      description: 'View and manage all inspectors in the system with powerful search and filtering capabilities.',
      points: ['Complete inspector list', 'Search and filter', 'View details & cards', 'Edit inspector profiles']
    },
    {
      title: 'New Inspector',
      icon: 'person_add',
      description: 'Onboard a new inspector to the system with a simple 6-step process.',
      points: ['6-Step Wizard', 'Complete profile setup', 'Equipment selection', 'Document uploads']
    },
    {
      title: 'Inspector Card',
      icon: 'badge',
      description: 'View all inspector authorization cards in a convenient gallery format.',
      points: ['Card gallery view', 'Quick access to cards', 'Download options', 'Renewal management']
    },
    {
      title: 'Approvals',
      icon: 'verified_user',
      description: 'Review and approve inspector applications with a comprehensive approval dashboard.',
      points: ['Approval dashboard', 'Safety verification', 'Capability assessment', 'Final approval workflow']
    },
    {
      title: 'Authorization Management',
      icon: 'admin_panel_settings',
      description: 'Monitor and manage inspector work authorizations and expiry alerts.',
      points: ['Expiry tracking', 'Notification system', 'Renewal workflows', 'Device type authorization']
    },
    {
      title: 'Inspector Detail View',
      icon: 'account_circle',
      description: 'Detailed inspector profile with multi-step approval process.',
      points: ['Complete profile view', 'Work history analysis', 'Assessment forms', 'Document management']
    },
    {
      title: 'Authorization Card',
      icon: 'credit_card',
      description: 'Official inspector work authorization card with QR code for verification.',
      points: ['Professional card design', 'QR code verification', 'Device type listing', 'Digital signatures']
    },
  ];

  setActive(index: number) {
    this.activeIndex = index;
  }

  // --- RESTRICTED SCROLL (No Infinite Loop) ---
  handleScroll(event: WheelEvent) {
    event.preventDefault(); 
    if (this.isScrolling) return;

    this.isScrolling = true;
    
    if (event.deltaY > 0) {
      // Scroll Down -> Increment until last item
      if (this.activeIndex < this.features.length - 1) {
        this.activeIndex++;
      }
    } else {
      // Scroll Up -> Decrement until first item (0)
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    }

    // Faster unlock for snappier feel
    setTimeout(() => {
      this.isScrolling = false;
    }, 300);
  }

  // --- CURVED STYLE LOGIC ---
  getItemStyle(index: number) {
    let offset = index - this.activeIndex;
    const rowHeight = 85; // Slightly reduced height for compactness
    const translateY = offset * rowHeight;
    
    // Scale: Active is 1, neighbors are smaller
    const scale = offset === 0 ? 1 : 0.95;
    
    // Opacity: Fade out items further away
    // Active = 1, Neighbors = 0.5, Others = 0 (Hidden)
    // This helps the "Restricted" feel by hiding items off-screen
    const opacity = offset === 0 ? 1 : Math.max(0, 0.6 - Math.abs(offset) * 0.2);
    
    const zIndex = offset === 0 ? 10 : 10 - Math.abs(offset);
    const pointerEvents = opacity < 0.1 ? 'none' : 'auto';

    return {
      'transform': `translateY(${translateY}px) scale(${scale})`,
      'opacity': opacity,
      'z-index': zIndex,
      'pointer-events': pointerEvents
    };
  }
}