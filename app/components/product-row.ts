import { Component, EventEmitter } from 'angular2/core';
import { Product } from '../models/product';
import { ProductImage } from './product-image';
import { PriceDisplay } from './price-display';
import { ProductDepartment } from './product-department';

@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  directives: [ProductImage, ProductDepartment, PriceDisplay],
  template: `
    <product-image [product]='product'></product-image>
    <div class='content'>
      <div class='header'>{{ product.name }}</div>
      <div class='meta'>
        <div class='product-sku'>SKU #{{ product.sku }}</div>
      </div>
      <div class='description'>
        <product-department [product]='product'></product-department>
      </div>
    </div>
    <price-display [price]='product.price'></price-display>
  `
})
export class ProductRow {
  product: Product;
}
