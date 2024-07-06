import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
  }
}
