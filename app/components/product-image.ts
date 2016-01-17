import { Component } from 'angular2/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  template: `
    <img class='product-image' [src]='product.imageUrl'>
  `
})
export class ProductImage {
  product: Product;
}