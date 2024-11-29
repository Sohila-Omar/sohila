import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../componant/product/product.component';
import { Iproduct } from '../models/iproduct';
import { ProductcardComponent } from '../componant/productcard/productcard.component';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProductcardComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit {
 


selectedProduct!: Iproduct|undefined

constructor(private router:ActivatedRoute, private productsService:ProductsService){
  
  
 
 
}
    ngOnInit(): void {
        const id = this.router.snapshot.paramMap.get("id");

        if(id){
            this.selectedProduct=this.productsService.getProductById(id)  
        }
        }
}
