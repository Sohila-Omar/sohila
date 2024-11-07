import { Component, Input } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { EGPcurrencyPipe } from '../../pipes/egpcurrency.pipe';
import { AppComponent } from '../../app.component';
import { HighlightDirective } from '../../dircetives/highlight.directive';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [CurrencyPipe ,DatePipe, EGPcurrencyPipe,CommonModule,HighlightDirective],
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

