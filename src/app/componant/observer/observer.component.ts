import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [],
  templateUrl: './observer.component.html',
  styleUrl: './observer.component.css'
})
export class ObserverComponent implements OnInit  {
  smsObserver!: Observable<string>

  ngOnInit(): void {

    let smss=[

      'sohila',
      'aya',
      'habiba'
    ];

    this.smsObserver=new Observable((observer)=>{
      let count=0
      setInterval(()=>{
        
        observer.next(smss[count]);

        if(count==smss.length-1){
          
          observer.complete();
        }
        count++;
      },1000)
    });

    this.smsObserver.subscribe({

    next:(data)=>{
     console.log(data,'next');
     
    },
      error:(error)=>{
        console.error(error);
      },
      complete:()=>{
        console.log("complete");
        
      }
    });
  }
  

}
