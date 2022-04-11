import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef ) { 

  
      this.elem.nativeElement.style.color='green';
  
  // @HostListener('click') onClicks(){
  //   this.textDeco('green')
  // }
  // @HostListener('click') onDoubleClicks(){
  //   this.textDeco('none')
  // }
  // private textDeco(action:string){
  //   this.elem.nativeElement.style.color=action;
  // }
}
}
