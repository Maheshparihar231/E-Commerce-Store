import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdertableComponent } from './components/ordertable/ordertable.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CreatproductComponent } from './components/creatproduct/creatproduct.component';

const routes: Routes = [
  {path:"",component:AdminComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"orders",component:OrdertableComponent},
    {path:"products",component:ProductsTableComponent},
    {path:"customers",component:CustomerComponent},
    {path:"add-products",component:CreatproductComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
