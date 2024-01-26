import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ]
})
export class SharedModule { }
