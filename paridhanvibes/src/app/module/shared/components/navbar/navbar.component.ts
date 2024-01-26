import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  currentSection:any
  isNavBarOpen:any;
  constructor(
    private router:Router
  ){}
  
  openNavBarContent(section:any){
    this.isNavBarOpen=true
    this.currentSection=section;
  }
  
  closeNavBarContent(){
    this.isNavBarOpen=false
  }
  
  navigateToCart(path:string){
    this.router.navigate([path])
  }

  @HostListener('document:click',[`$event`])
  onDocumentClick(event:MouseEvent){
    const modelContainer = document.querySelector(".model-container");
    const openButton = document.querySelectorAll(".open-button");

    let clickInsideButton=false;

    openButton.forEach((button)=>{
      if(button.contains(event.target as Node)){
        clickInsideButton=true
      }
    })
    if(modelContainer && !clickInsideButton && this.isNavBarOpen){
      this.closeNavBarContent();
    }
  }

  navigateTo(path:string){
    this.router.navigate([path])
  }
}
