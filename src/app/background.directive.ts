import { Directive,Input ,ElementRef,OnInit,OnChanges } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnChanges {

  @Input('appBackground')
  appBackground:any;

  constructor(private ef:ElementRef) {

    

   }


   ngOnChanges(){
console.log("inside directive chnage "+ this.appBackground);
this.ef.nativeElement.style.background="url("+this.appBackground+")";
this.ef.nativeElement.style['background-size'] ="cover";
this.ef.nativeElement.style.opacity='0.7';



   }

   ngOnInit(){
console.log("inside directive "+ this.appBackground);
this.ef.nativeElement.style.background="url("+this.appBackground+")";


   }

}
