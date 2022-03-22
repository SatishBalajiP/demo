import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems : Product[] = [];
  grandTotal!: Number;

  onRemoveItem(item : Product){
    this.productService.removeItem(item);
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
    this.grandTotal = this.productService.getTotal();
  }

}

