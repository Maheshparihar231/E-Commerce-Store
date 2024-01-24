import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  currentSection:any
  isNavBarOpen:any;
  
  openNavBarContent(section:any){
    this.isNavBarOpen=true
    this.currentSection=section;
  }
  
  closeNavBarContent(){
    this.isNavBarOpen=false
  }
  
  navigateToCart(path:any){}

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
}
