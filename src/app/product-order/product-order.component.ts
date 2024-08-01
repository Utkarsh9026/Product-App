import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductOrderListComponent } from '../product-order-list/product-order-list.component';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ProductOrderListComponent],
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css'],
})
export class ProductOrderComponent implements OnInit {
  productForm: FormGroup;
  products = ['Pencil', 'Eraser', 'Pens'];
  showOrders = false;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      orders: this.fb.array([this.createOrder()]),
    });
  }

  ngOnInit(): void {}

  createOrder(): FormGroup {
    return this.fb.group({
      productName: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
    });
  }

  get orders(): FormArray {
    return this.productForm.get('orders') as FormArray;
  }

  addOrder() {
    if (this.orders.length < 8) {
      this.orders.push(this.createOrder());
    }
  }

  removeOrder(index: number) {
    this.orders.removeAt(index);
  }

  showOrder() {
    const validOrders = this.orders.controls.filter((order) => order.valid);
    this.orders.clear();
    validOrders.forEach((order) => this.orders.push(order as FormGroup));
    this.showOrders = true;
  }

  readOrder(): void {
    const orderText = this.orders.controls
      .map((order) => {
        const product = order.get('productName')?.value;
        const quantity = order.get('quantity')?.value;
        return `${product}, quantity: ${quantity}`;
      })
      .join('. ');

    const speech = new SpeechSynthesisUtterance(orderText);
    window.speechSynthesis.speak(speech);
  }
}
