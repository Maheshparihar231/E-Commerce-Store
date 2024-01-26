import { Component } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  Orders=[1,1,1,1]
  steps=[
    {id:0,title:"PLACED",isComplated:true},
    {id:1,title:"CONFIRMED",isComplated:true},
    {id:2,title:"SHIPPED",isComplated:false},
    {id:3,title:"DELIVERED",isComplated:true},
  ]
}
