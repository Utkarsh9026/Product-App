import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductOrderComponent } from './product-order/product-order.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, ProductOrderComponent],
  providers: [],
})
export class AppModule {}
