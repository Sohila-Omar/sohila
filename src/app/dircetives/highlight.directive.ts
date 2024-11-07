import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
 @HostListener('mouseenter') onMouseEnter(){
  
  
   this. elmentRef.nativeElement.style.backgroundColor ="yellow";
 }

  @HostListener('mouseleave') onMouseOut(){
    this. elmentRef.nativeElement.style.backgroundColor ="gray";
  
 }
  constructor(public elmentRef:ElementRef) {}

}
