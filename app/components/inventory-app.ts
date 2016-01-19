import { Component } from 'angular2/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ProductList } from './product-list';

// Top level app.
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

  // Inject ProductService here to get the list of products to be rendered.
  constructor(private p: ProductService) {
    this.products = p.products;
  }

  /**
   * Event handler; handles output from the ProductList. Invokes this function
   * when the onProductSelected event is observed from the product-list element.
   */
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
