import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hospitalImages = [
    { url: 'assets/images/image1.jpg' },
    { url: 'assets/images/image2.jpg' },
    { url: 'assets/images/image3.jpg' }
  ];
}
