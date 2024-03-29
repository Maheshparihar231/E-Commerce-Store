import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { OrderService } from 'src/app/state/Order/order.service';

@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.css']
})
export class OrdertableComponent {
  order: any;

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.orderService.getAllOrders();
    

    this.store.pipe(select((store) => store.order)).subscribe((order) => {
      this.order = order.orders;
      console.log("or ",order)
    });
  }

}
