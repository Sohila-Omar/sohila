import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private httpClient:HttpClient) {}

  getAllProducts():Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>("http://localhost:3000/products");
  }

  getProductById(id:string){
    return this.httpClient.get(`http://localhost:3000/products/${id}`);
  }

 deleteProduct(id:string){
   return this.httpClient.delete(`http://localhost:3000/products/${id}`);
 }


 
}
