import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Models/AppState';
import { getCartRequest } from 'src/app/state/Cart/cart.action';
import { CartService } from 'src/app/state/Cart/cart.service';
import { ProductService } from 'src/app/state/Product/product.servce';
import { productdata } from 'src/productData';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  
  selectedSize!: string;
  relatedProducts: any;
  reviews = [1, 1, 1];
  productDetails$!: Observable<any>;
  productId!: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private productService: ProductService,
    private cartService:CartService,
  ) {
    this.relatedProducts = productdata;
  }

  navigateToCart = () => {
    this.router.navigate(['/cart']);
  };

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('productId', id);

    if (id) {
      console.log('id ', id);
      this.productService.findProductById(id)
    }

    this.productDetails$ = this.store.select(
      (state) => state.product.selectedProduct
    );

    this.productDetails$.subscribe((productdata) => {
      this.productId = Number(productdata.id);
      console.log('product details from store - ', productdata.id);
    });
  }

  handleAddToCart = () => {
    const data = { size: this.selectedSize, productId: this.productId };
    this.cartService.addItemToCart(data)
    this.cartService.getCart()

    this.store.dispatch(getCartRequest());

    this.navigateToCart();
  };

}
