import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductcardComponent } from '../productcard/productcard.component';
import { ProductsService } from '../../services/products.service';
import { ProductsApiService } from '../../services/products-api.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductcardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Iproduct[] = [];

constructor(private productService:ProductsApiService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data)=>{
        this.products = data;
      },
      
    })
  }






}
