import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductOrderComponent } from './product-order/product-order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductOrderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'product-order-app';
}
