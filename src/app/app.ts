import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar'; // Adjust path if needed

@Component({
  selector: 'app-root',
  standalone: true,
  // IMPORT NavbarComponent and RouterOutlet HERE
  imports: [RouterOutlet, NavbarComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'xpress-inspect';
}