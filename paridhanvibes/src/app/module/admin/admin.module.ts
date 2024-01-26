import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdertableComponent } from './components/ordertable/ordertable.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CreatproductComponent } from './components/creatproduct/creatproduct.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    OrdertableComponent,
    ProductsTableComponent,
    CustomerComponent,
    CreatproductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
