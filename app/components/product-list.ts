import { Component, EventEmitter } from 'angular2/core';
import { Product } from '../models/product';
import { ProductRow } from './product-row'

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
  onProductSelected: EventEmitter<Product>;
  currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
