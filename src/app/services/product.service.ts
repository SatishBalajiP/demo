import { Injectable } from '@angular/core';
import { Product } from './product.model';
import productData from './products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = productData;
  private cartitems: Product[] = [];
  product: any;

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductsById(id: Number) {
    console.log(id);
    return this.products.filter(product => product.id === Number(id));
  }
 
  getCartItems() {
    return this.cartitems;
  }

  addtoCart(item: Product) {
    this.cartitems.push(item);
  }

  removeItem(item: Product) {
    this.cartitems.splice(this.cartitems.indexOf(item), 1)
  }

  getTotal(): Number {
    let grandTotal = 0;
    this.cartitems.map((a: any) => {
      grandTotal += a.price;
    })
    return grandTotal;
  }

  getByCategory(id: Number) {
    console.log(id);
    return this.products.filter(product => product.category === Number(id));
  }

  // filter(id : Number ){
  //   return this.products.filter(product => product.category === Number(id));
  // }
}
