import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ApiComponent } from '../api/api.component';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-dynamic-products',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-products.component.html',
  styleUrl: './dynamic-products.component.css'
})
export class DynamicProductsComponent implements OnInit  {
constructor(private productService:ProductsApiService){}

// constructor(private httpClient: HttpClient){}


  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data)=>{
        console.log(data,'products data');
      },
      error: (err)=>{
        console.log(err);
      },
      complete: ()=>{},
    });



   this.productService.getProductById('5').subscribe({
    next: (data)=>{
      console.log(data,'product data');
    },
    error: (err)=>{
      console.log(err);
    },
    complete: ()=>{},
   });

  }

  deleteProduct(){
    this.productService.deleteProduct('1').subscribe({
      next: (data)=>{
        console.log(data,'product deleted');
      },
    });
  }
  

}
  //  this.httpClient.get<Iproduct[]>("http://localhost:3000/products?quantity=8").subscribe({
  //   next: (data)=>{
  //   console.log(data,'products data');
    
  //   },
  //   error: (err)=>{

  //   },
  //   complete: ()=>{

  //   },


  //  })
  // }



  // addPost(){
    // this.httpClient.post("http://localhost:3000/users",{
     
    //   email: "john@example.com",
    //   password: "password123",
    
      

 
    // })
    // .subscribe({
    //    next: (data)=>{
    //      console.log(data,'post data');
    //    },
    //    error: (err)=>{
    //      console.log(err);
    //    },
    //    complete: ()=>{
    //      console.log('post completed');
    //    },
    //  });

 


