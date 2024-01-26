import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ProductReviewCardComponent } from './components/product-detail/product-review-card/product-review-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrderCardComponent } from './components/order/order-card/order-card.component';

@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailComponent,
    ProductReviewCardComponent,
    AddressFormComponent,
    OrderCardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatMenuModule,
    SharedModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    FeatureComponent,
    HomeComponent,
    ProductsComponent
  ]
})
export class FeatureModule { }
