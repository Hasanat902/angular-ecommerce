import { Component, inject } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div
      class="bg-slate-200 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <span class="text-xl">E-commerce Site</span>
      <app-primary-button [label]="'Cart (' + cartService.cart().length + ')'" />
    </div>
  `,
  styles: ``,
})
export class Header {
  cartService = inject(Cart);
}
