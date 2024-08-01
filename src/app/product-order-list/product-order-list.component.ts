import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-order-list.component.html',
  styleUrls: ['./product-order-list.component.css'],
})
export class ProductOrderListComponent {
  @Input() orders: any[] = [];
}
