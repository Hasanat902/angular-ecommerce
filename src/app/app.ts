import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { ProductsList } from './pages/products-list/products-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: ``,
})
export class App {}
