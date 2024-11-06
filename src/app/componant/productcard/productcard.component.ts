import { Component, Input } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { EGPcurrencyPipe } from '../../pipes/egpcurrency.pipe';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [CurrencyPipe ,DatePipe, EGPcurrencyPipe],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
 @Input() dynamicProduct!:Iproduct;

expireDate:Date =new Date();

  handleBuy(product:Iproduct){
    product.quantity--;
    
  }
  // formatPrice(price:number){
  // return "$"+price ;
      
  //   }
  }

