import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verification-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verification-card.html',
  styleUrls: ['./verification-card.css']
})
export class VerificationCardComponent {
  // 1. Controls if the modal is visible
  @Input() isOpen: boolean = false; 
  
  // 2. The inspector data passed from the profile page
  @Input() inspector: any = null; 

  // 3. Tells the parent page to close the modal
  @Output() close = new EventEmitter<void>(); 

  isFlipped: boolean = false;

  closeModal(event: Event) {
    // Only close if they click the dark background, not the card itself
    if ((event.target as HTMLElement).classList.contains('backdrop')) {
      this.close.emit();
      this.isFlipped = false; // Reset flip state when closing
    }
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}