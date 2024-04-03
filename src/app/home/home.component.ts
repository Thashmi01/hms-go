import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  images: string[] = [
    'assets/img/slider/hos_anime.jpg',
    'assets/img/slider/hos1.jpg',
    'assets/img/slider/1.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    
    setInterval(() => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
    }, 4000); // Change slide every 2 seconds
  }
}
