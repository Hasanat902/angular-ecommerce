import { Component, inject } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  template: `
    <div
      class="bg-slate-200 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <button class="text-xl cursor-pointer" routerLink="/">E-commerce Site</button>
      <app-primary-button
        [label]="'Cart (' + cartService.cart().length + ')'"
        routerLink="/cart"
      />
    </div>
  `,
  styles: ``,
})
export class Header {
  cartService = inject(Cart);
}
