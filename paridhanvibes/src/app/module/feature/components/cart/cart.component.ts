import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    private router:Router,
  ){}
  cart=[1,1,1,1,1]
  checkOut(){
    this.router.navigate(['checkout'])
  }
}
