import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="bg-slate-200 px-4 py-3 shadow-md">
      <span>E-commerce Site</span>
    </div>
  `,
  styles: `
    
  `,
})
export class Header {
  title = signal('Angular E-commerce');
}
