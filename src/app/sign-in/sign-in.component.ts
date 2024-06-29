import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  @Output() close = new EventEmitter<void>();


  closeSignIn() {
    this.close.emit();
  }
}
