import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink

@Component({
  selector: 'app-inspector-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inspector-cards.html',
  styleUrls: ['./inspector-cards.css']
})
export class InspectorCardsComponent {
  searchTerm: string = '';
  selectedStatus: string = 'All Statuses';

  inspectors = [
    {
      name: 'John Doe',
      psn: 'EMP123456',
      initials: 'JD',
      authNumber: '2025-123',
      expiry: 'Jan 20, 2026',
      equipment: ['Traction', 'Hydraulic', 'Escalators'],
      status: 'Active',
      statusClass: 'active',
      avatarColor: 'bg-blue'
    },
    {
      name: 'Jane Smith',
      psn: 'EMP789012',
      initials: 'JS',
      authNumber: '2025-789',
      expiry: 'Apr 15, 2026',
      equipment: ['Traction', 'Escalators'],
      status: 'Active',
      statusClass: 'active',
      avatarColor: 'bg-indigo'
    },
    {
      name: 'Michael Brown',
      psn: 'EMP456789',
      initials: 'MB',
      authNumber: '2025-456',
      expiry: 'Dec 15, 2025',
      equipment: ['Traction', 'Hydraulic', 'Walks','Escalators'],
      status: 'Active',
      statusClass: 'active',
      avatarColor: 'bg-teal'
    },
    {
      name: 'Rajesh Kumar',
      psn: 'EMP321654',
      initials: 'RK',
      authNumber: '2024-321',
      expiry: 'Mar 20 (58d)',
      equipment: ['Traction', 'Hydraulic','Escalators'],
      status: 'Expiring',
      statusClass: 'expiring',
      avatarColor: 'bg-orange'
    },
    {
      name: 'Sarah Wilson',
      psn: 'EMP554433',
      initials: 'SW',
      authNumber: '2025-554',
      expiry: 'Jun 10, 2026',
      equipment: ['Traction', 'Hydraulic', 'Escalators', 'Moving Walks', 'Lifts', 'Cranes'],
      status: 'Active',
      statusClass: 'active',
      avatarColor: 'bg-purple'
    },
    {
      name: 'David Chen',
      psn: 'EMP998877',
      initials: 'DC',
      authNumber: '2025-998',
      expiry: 'Aug 22, 2026',
      equipment: ['Escalators'],
      status: 'Active',
      statusClass: 'active',
      avatarColor: 'bg-cyan'
    }
  ];

  downloadAll() {
    console.log('Downloading cards...');
  }
}