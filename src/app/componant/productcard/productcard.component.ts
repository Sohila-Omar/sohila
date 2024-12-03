import { Component, Input, OnInit} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { EGPcurrencyPipe } from '../../pipes/egpcurrency.pipe';
import { HighlightDirective } from '../../dircetives/highlight.directive';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductsApiService } from '../../services/products-api.service';


@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [CurrencyPipe ,DatePipe, EGPcurrencyPipe,CommonModule,HighlightDirective,RouterModule],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent implements OnInit {
 @Input() dynamicProduct!:Iproduct;


 
 taxes!: number;
 constructor(private router:Router,private cartService:CartService,private productService:ProductsApiService){}

deleteSelectedProduct(){
  this.productService.deleteProduct(this.dynamicProduct.id).subscribe({
    next: (data)=>{
      console.log(data);
     
    },
    error: (err)=>{
      console.error(err);
    },
  })
}

handleAddToCart(){
  this.cartService.addToCart(this.dynamicProduct)
  alert("Item added to cart")
  
 
}
ngOnInit():void{
  
  this.taxes = this.dynamicProduct.price * 0.14 ;
}


expireDate:Date =new Date();

  handleBuy(product:Iproduct){
    product.quantity--;
    
  }

  // formatPrice(price:number){
  // return "$"+price ;
      
  //   }
  }

