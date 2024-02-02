import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureModule } from './module/feature/feature.module';
import { SharedModule } from './module/shared/shared.module';
import { AdminModule } from './module/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './module/auth/auth.module';
import { authReducer } from './state/Auth/auth.reducer';
import { productReducer } from './state/Product/product.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from './state/Cart/cart.reducer';
import { reviewReducer } from './state/Review/review.reducer';
import { userReducer } from './state/User/reducer';
import { orderReducer } from './state/Order/order.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    StoreModule.forRoot({
      auth: authReducer,
      user: userReducer,
      product: productReducer,
      cart: cartReducer,
      order: orderReducer,
      review:reviewReducer
    }),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    //StoreDevtoolsModule.instrument(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
