import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { ProductService } from "./services/product.service";
import { InventoryApp } from './components/inventory-app';

// Exercising best practice of bootstrapping alone at the top level.
// InventoryApp is the top level app. Register ProductService as a depednency.
bootstrap(InventoryApp, [ProductService]);
