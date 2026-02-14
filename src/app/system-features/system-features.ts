import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-features.html',
  styleUrls: ['./system-features.css']
})
export class SystemFeaturesComponent {
  features = [
    {
      title: 'Multi-Step Onboarding',
      desc: 'Guided 5-step wizard for inspector registration ensuring no data is missed.',
      icon: 'assignment_ind',
      color: 'blue'
    },
    {
      title: 'Two-Step Approval',
      desc: 'Rigorous safety verification followed by a capability assessment workflow.',
      icon: 'verified',
      color: 'green'
    },
    {
      title: 'Conflict of Interest',
      desc: 'Automatic 1-year restriction tracking to prevent assignment conflicts.',
      icon: 'gavel',
      color: 'purple'
    },
    {
      title: 'Expiry Notifications',
      desc: 'Smart 2-month advance warning system to prevent authorization lapses.',
      icon: 'notifications_active',
      color: 'orange'
    },
    {
      title: 'Device Hierarchy',
      desc: 'Inherited authorization system based on specific device certifications.',
      icon: 'account_tree',
      color: 'teal'
    },
    {
      title: 'QR Code Verification',
      desc: 'Real-time authorization checks in the field via instant QR scanning.',
      icon: 'qr_code_scanner',
      color: 'dark'
    },
    {
      title: 'Document Management',
      desc: 'Secure storage for CVs, certificates, and verification documents.',
      icon: 'folder_shared',
      color: 'red'
    },
    {
      title: 'Timeline Tracking',
      desc: 'Complete audit trail and history of every action taken on a profile.',
      icon: 'history',
      color: 'indigo'
    }
  ];
}