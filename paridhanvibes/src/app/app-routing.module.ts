import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/feature/components/home/home.component';
import { ProductsComponent } from './module/feature/components/products/products.component';
import { CartComponent } from './module/feature/components/cart/cart.component';
import { ProductDetailComponent } from './module/feature/components/product-detail/product-detail.component';
import { CheckoutComponent } from './module/feature/components/checkout/checkout.component';
import { PaymentComponent } from './module/feature/components/payment/payment.component';
import { PaymentSuccessComponent } from './module/feature/components/payment-success/payment-success.component';
import { OrderComponent } from './module/feature/components/order/order.component';
import { OrderDetailComponent } from './module/feature/components/order-detail/order-detail.component';
import { AdminRoutingModule } from './module/admin/admin-routing.module';
import { SigninComponent } from './module/auth/signin/signin.component';
import { SignupComponent } from './module/auth/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"product-details/:id",component:ProductDetailComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"checkout/payment/:id",component:PaymentComponent},
  {path:"payment-success",component:PaymentSuccessComponent},
  {path:'login',component:SigninComponent},
  {path:'register',component:SignupComponent},
  { path: ':lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
  { path: 'order-summery', component: ProductsComponent },
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:orderId', component: OrderDetailComponent },
  {path: 'admin',loadChildren:()=>import("./module/admin/admin-routing.module").then(m=>m.AdminRoutingModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
