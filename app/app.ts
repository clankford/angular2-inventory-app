import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { ProductService } from "./services/product.service";
import { InventoryApp } from './components/inventory';

bootstrap(InventoryApp, [ProductService]);
