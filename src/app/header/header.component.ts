import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() signInToggle = new EventEmitter<void>();

  toggleSignIn() {
    this.signInToggle.emit();
  }
}
