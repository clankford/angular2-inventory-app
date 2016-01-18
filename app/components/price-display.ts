import { Component } from 'angular2/core';

// Defines the price display component. Note the escale character for the $.
@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
    <div class='price-display'>\${{ price }}</div>
  `
})
export class PriceDisplay {
  price: number;
}
