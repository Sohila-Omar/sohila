import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductcardComponent } from '../productcard/productcard.component';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductcardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

constructor(private productsService: ProductsService){}
getProduct(){
    return this.productsService.products;
  }

    handleBuy(product:Iproduct){
      product.quantity--;
      
    }
    





}
