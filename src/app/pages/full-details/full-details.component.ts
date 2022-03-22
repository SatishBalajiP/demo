import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
  styleUrls: ['./full-details.component.css']
})
export class FullDetailsComponent implements OnInit {
 
  id:any;
  items: Product[]=[];
    
  constructor(private route:ActivatedRoute, 
    private productService:ProductService) { }

  ngOnInit() {
    this.id=(this.route.snapshot.params['id']);
    this.items = this.productService.getProductsById(this.id);
  }
  
}
