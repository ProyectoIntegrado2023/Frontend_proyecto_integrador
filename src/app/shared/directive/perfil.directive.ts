import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPerfil]'
})
export class PerfilDirective {

  url: string = './../../../assets/img/perfil.png';
  constructor(
    private elementRef: ElementRef
  ){}

  @HostListener('error')
  handleError() {
    const img = this.elementRef.nativeElement;
    img.src = this.url;
  }

}
