import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



type posts={
  userId: number;
  id: number;
  title:string;
  body: string;
};

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit  {


  posts!: posts[]

  constructor(private httpClient: HttpClient){}
    
  



  ngOnInit(): void {
   this.httpClient
   .get<posts[]>( 'https://jsonplaceholder.typicode.com/posts').subscribe({

    next:(data)=>{
   this.posts = data;
   
    },
    error:(err)=>{
      console.log(err);
    },

    complete:()=>{
    console.log("Complete");
    
    },
   });
  }
}
// 'https://jsonplaceholder.typicode.com/posts'
// https://api.escuelajs.co/docs#/
