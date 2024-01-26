import { Component, OnInit } from '@angular/core';
import { mainCarouselData } from 'src/Data/mainCarouselData';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent implements OnInit{
  carouselData:any
  currentSlide=0;
  interval:any

  ngOnInit(): void {
    this.carouselData= mainCarouselData;
    //this.autoplay()
  }

  autoplay(){
    setInterval(()=>{
      this.nextSlide();
      console.log(this.currentSlide);
      
    },2000)
  }

  nextSlide(){
    this.currentSlide=(this.currentSlide+1)%4;
  }
}
