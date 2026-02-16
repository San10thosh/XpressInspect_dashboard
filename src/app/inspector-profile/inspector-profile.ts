import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; // Import Location
import * as html2pdf from 'html2pdf.js'; // Import html2pdf.js

@Component({
  selector: 'app-inspector-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inspector-profile.html',
  styleUrls: ['./inspector-profile.css']
})
export class InspectorProfileComponent {
  constructor(private location: Location) {}
  // Mock data based on your original page
  inspector = {
    name: 'John Doe',
    initials: 'JD',
    psn: 'EMP123456',
    status: 'Active',
    phone: '+1 234 567 8900',
    email: 'john.doe@xpressinspect.com', // Added to match the reference style
    languages: 'English, Spanish, French',
    experience: '8.5 years',
    
    authDetails: {
      number: 'AUTH-2025-123456',
      issueDate: 'Jan 20, 2025',
      expiryDate: 'Jan 20, 2026',
      isExpiring: false // Can toggle this to show red dates
    },

    deviceTypes: [
      {
        category: 'Fire Safety Equipment (All Subcategories)',
        items: ['Fire Extinguishers (All Types)', 'Sprinkler Systems', 'Fire Alarms', 'Emergency Lighting']
      },
      {
        category: 'HVAC Systems (Limited to AC Units)',
        items: ['Air Conditioning Units']
      }
    ],

  verification: {
    url: 'https://xpressinspect.com/verify/AUTH-2025-123456',
    approver: 'Robert Williams',
    approverRole: 'Approver'
  }
};

  downloadPDF() {
    // Target the specific report wrapper we created in step 2
    const element = document.getElementById('printable-report');

    // Check if element exists before proceeding
    if (!element) {
      console.error('Printable report element not found');
      return;
    }

    // PDF Configuration options
    const options = {
      margin:       0.5, // Half-inch margins for a clean document look
      filename:     'Inspector_Authorization_Report.pdf',
      image:        { type: 'jpeg' as 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true }, // scale: 2 ensures high-res QR codes and text
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' as 'portrait' }
    };

  // Generate and download the PDF
  html2pdf.default().set(options).from(element).save();
}

goBack() {
  this.location.back(); // This acts exactly like the browser's back button
}

printReport() {
  window.print();
}
}