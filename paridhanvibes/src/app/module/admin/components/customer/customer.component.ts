import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { UserService } from 'src/app/state/User/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers:any

  constructor(private store:Store<AppState>, 
    
    private userService:UserService
    ){
    

  }

  ngOnInit(){

    this.userService.getAllCustomers();

    this.store.pipe(select(store=>store.user)).subscribe((user)=>{
      
      this.customers=user.customers
      console.log("store ---- ",user)
    })
  }
}
