import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Product[] = [];
  name : any;
  p :any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.items = this.productService.getProducts();    
  }
  
  onAddToCart(item: Product) {
    this.productService.addtoCart(item);
  }

  Search(){
    if (this.name == ""){
      this.ngOnInit();
    }else{
      this.items= this.items.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
}

