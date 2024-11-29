import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnDestroy {

  interval:any
  constructor(){
  this.interval = setInterval(() => {
    console.log("اشطر كتكوتة");
    
  }, 1000);
}


ngOnDestroy():void{
  console.log("اشطر كتكوتة Sohila");
  clearInterval(this.interval);
}
}
