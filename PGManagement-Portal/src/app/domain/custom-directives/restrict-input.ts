import {Directive, ElementRef, Input} from '@angular/core';



@Directive({
  selector: '[app-restrict-input]',
})
export class RestrictInputDirective {
  
  public inputValidator(event: any) {
    //console.log(event.target.value);
    const pattern = /^[a-zA-Z]*$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
      // invalid character, prevent input
      
    }
  }
}

  // map of some of the regex strings I'm using (TODO: add your own)
  // private regexMap = {
  //   integer: '^[0-9]*$',
  //   float: '^[+-]?([0-9]*[.])?[0-9]+$',
  //   words: '([A-z]*\\s)*',
  //   point25: '^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$'
  // };

  // constructor(private el: ElementRef) {}

  // @Input('app-restrict-input')
  // public set defineInputType(type: string) {
  //   Inputmask({regex: this.regexMap[type], placeholder: ''})
  //     .mask(this.el.nativeElement);
  // }

