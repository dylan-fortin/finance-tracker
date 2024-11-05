import { CommonModule, DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
