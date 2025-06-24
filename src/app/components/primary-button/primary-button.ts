import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-blue-500 text-white w-full px-5 py-2 rounded-md shadow-md hover:opacity-90 cursor-pointer"
      (click)="btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButton {
  label = input('');

  btnClicked = output();
}
