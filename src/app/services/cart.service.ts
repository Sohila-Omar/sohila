import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:Iproduct[]=[]

  addToCart(item:Iproduct){
    this.cartItems.push(item)
  }

  constructor() { }
}
