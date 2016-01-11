import { Product } from "../models/product";

export class ProductService {
  products: Product[];

  constructor(){
    this.products = new Array<Product>();
    this.products.push(new Product('67525180', 'A Black Hat',
      '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'],
      19.99));
    this.products.push(new Product('87345714', 'Blue Jacket',
      '/resources/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'], 238.99));
    this.products.push(new Product('12346313', 'Black Running Shoes',
      '/resources/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],109.99));
    }
}
