import { Component } from 'angular2/core';
import { Product } from '../models/product';

/**
 * Defines the product image component, sets it's own CSS via host attribute.
 * Uses [src] instead of regular binding so avoid binding the image URL before
 * Angular loads. This should be considered a best practice.
 */
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
