import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { ProductService } from "./services/product.service";

@Component({
  selector: 'inventory-app',
  template: `
  <div class="inventory-app">
    <h1>{{ product.name }}</h1>
    <span>{{ product.sku }}</span>
  </div>
  `
})
class InventoryApp {
  product: ProductService;

  constructor(private p: ProductService) {
    this.product = p;
  }
}

bootstrap(InventoryApp, [ProductService]);
