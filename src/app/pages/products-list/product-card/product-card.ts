import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from '../../../components/primary-button/primary-button';
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div class="bg-white shadow-md rounded-xl p-6 flex flex-col gap-6 relative h-full">
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[200px] object-contain"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm">{{ '$' + product().price }}</span>
        <app-primary-button
          label="Add to Cart"
          class="mt-3"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>
      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
      >
        @if(product().stock) {
        {{ product().stock }} left } @else { Out of stock }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  cartService = inject(Cart);
  product = input.required<Product>();
}
