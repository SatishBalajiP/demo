import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  items: Product[]=[];
  p:any;
  category : any;

  constructor(private productService: ProductService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.items = this.productService.getProducts();    
    this.category=(this.route.snapshot.params['category']);
    this.items = this.productService.getByCategory(this.category);
  }
  
  onAddToCart(item: Product) {
    this.productService.addtoCart(item);
  }
}
