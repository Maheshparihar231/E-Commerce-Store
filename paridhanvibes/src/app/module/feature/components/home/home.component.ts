import { Component, OnInit } from '@angular/core';
import { menJeans } from 'src/Data/menJeans';
import { mensShoes } from 'src/Data/shoes';
import { gouns } from 'src/Data/womensGown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  menJeans:any
  shoes:any
  womensGown:any
  
  ngOnInit(): void {
    this.menJeans = menJeans.slice(0,10)
    this.shoes = mensShoes.slice(0,10)
    this.womensGown = gouns.slice(0,10)
  }

}
