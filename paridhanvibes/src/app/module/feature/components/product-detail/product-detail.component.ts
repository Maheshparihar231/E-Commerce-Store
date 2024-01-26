import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menJeans } from 'src/Data/menJeans';
import { mensShoes } from 'src/Data/shoes';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  
  constructor(
    private router:Router,
  ){}
  selectedSize:any
  reviews=[1,1,1,1]
  relatedProducts:any
  
  handleAddToCart(){
    console.log(this.selectedSize);
    this.router.navigate(['cart'])
  }
  
  ngOnInit(): void {
    this.relatedProducts = menJeans.slice(0,15)
  }

}
