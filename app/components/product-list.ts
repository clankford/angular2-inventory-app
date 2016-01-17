import { Component, EventEmitter } from 'angular2/core';
import { Product } from '../models/product';

@Component({
  selector: 'products-list',
  //directives: [ProductRow],
  //inputs: ['productList'],
  //outputs: ['onProductSelected'],
  template: `
    <div class='ui items'>
      Hello World
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
}
