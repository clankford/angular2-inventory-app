import { Component } from 'angular2/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ProductList } from './product-list';

@Component({
  selector: 'inventory-app',
  directives: [ProductList],
  template: `
  <div class="inventory-app">
    <products-list
      [productList]="products"
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `
})
export class InventoryApp {
  products: Product[];

  constructor(private p: ProductService) {
    this.products = p.products;
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
