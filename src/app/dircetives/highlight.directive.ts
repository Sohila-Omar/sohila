import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
 @HostListener('mouseenter') onMouseEnter(){
  
  
   this. elmentRef.nativeElement.style.backgroundColor ="yellow";
 }

  @HostListener('mouseleave') onMouseOut(){
    this. elmentRef.nativeElement.style.backgroundColor ="gray";
  
 }

 @Input() appHighlight!:string;
  constructor(public elmentRef:ElementRef) {
   
  
  }
  ngOnChanges(): void {
    console.log(this.appHighlight);
  }
 

}
