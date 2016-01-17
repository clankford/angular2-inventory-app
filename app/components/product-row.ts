import { Component, EventEmitter } from 'angular2/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-row',
  inputs: ['product'],
  //host: {'class': 'item'},
  //directives: [ProductImage, ProductDepartment, PriceDisplay],
  template: `
    Hello World!
  `
})
export class ProductRow {
  product: Product;
}
