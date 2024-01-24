import { Component, Input, OnInit } from '@angular/core';
import { navigation } from './nav-content';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.css']
})
export class NavContentComponent implements OnInit {

  @Input() selectedSection: any;
  category: any

  ngOnInit(): void {
    this.category=navigation
    console.log(this.selectedSection);
    console.log(this.category[this.selectedSection].sections);
        
  }
}
