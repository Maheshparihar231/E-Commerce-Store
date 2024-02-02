import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdertableComponent } from './components/ordertable/ordertable.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CreatproductComponent } from './components/creatproduct/creatproduct.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CustomerTableComponent } from './table/customer-table/customer-table.component';
import { OrdersTableComponent } from './table/orders-table/orders-table.component';
import { ProductTableComponent } from './table/product-table/product-table.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    OrdertableComponent,
    ProductsTableComponent,
    CustomerComponent,
    CreatproductComponent,
    CustomerTableComponent,
    OrdersTableComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatChipsModule,
    MatMenuModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    AdminRoutingModule,
    MatDividerModule,
    MatGridListModule
  ],
})
export class AdminModule { }
