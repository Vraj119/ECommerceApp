// src/app/app.component.ts
import { Component, ViewEncapsulation , Inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, RouterOutlet } from '@angular/router'; // Import RouterModule
import { appRoutes } from './app.routes';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ContactComponent,
    ProductsComponent,
    SignInComponent
  ]
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {

  }
  showSignIn: boolean = false;

  toggleSignIn() {
    this.showSignIn = !this.showSignIn;
    if (this.showSignIn) {
      document.body.classList.add('no-scroll'); // Add no-scroll class
    } else {
      document.body.classList.remove('no-scroll'); // Remove no-scroll class
    }
  }
}


RouterModule.forRoot(appRoutes);
