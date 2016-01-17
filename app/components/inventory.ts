import { Component } from 'angular2/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'inventory-app',
  template: `
  <div class="inventory-app">
    <h1>{{ products[0].name }}</h1>
    <span>{{ products[0].sku }}</span>
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
