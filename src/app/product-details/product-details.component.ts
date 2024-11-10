import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

constructor(private router:ActivatedRoute){
  
  
 const id= this.router.snapshot.paramMap.get("id")
 if(id){
 const selectedProduct = this.products.find(
  (product)=>product.id==Number(id)
);
}
}
}
