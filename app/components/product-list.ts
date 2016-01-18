import { Component, EventEmitter } from 'angular2/core';
import { Product } from '../models/product';
import { ProductRow } from './product-row'

/**
 * Component to list the product-rows for each product passed in from
 * inventory-app originating from the ProductService.
 */
@Component({
  selector: 'products-list',
  directives: [ProductRow],
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
    <div class='ui items'>
      <product-row
        *ngFor='#p of productList'
        [product]='p'
        (click)='clicked(p)'
        [class.selected]='isSelected(p)'>
      </product-row>
    </div>
  `
})
export class ProductList {
  productList: Product[];
  // Declare new custom event
  onProductSelected: EventEmitter<Product>;
  currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  /**
   * Event handler for built-in click event, when click event is observed on
   * the product-row element, invoke this function. Captures the click event
   * and emits a new event 'onProductSelected' on this component's output.
   */
  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  /**
   * Compares product being set (in ngFor) to the current product set in the
   * click event handler. If they are the same then set the class of the element
   * to highlight the row. See component template definition above.
   */
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
