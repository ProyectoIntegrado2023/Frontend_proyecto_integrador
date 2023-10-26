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

  // USO DE FIREBASE PARA USO DE DIRECTIVA
  // private getImagen(element: any){
  //   const imageRef = ref(this.storageFirebase, CarpetaFirebase.DIRECTIVA);

  //   listAll(imageRef).then( res => {
      
  //     res.items.forEach( async item => {
  //       if(item.fullPath == CarpetaFirebase.DIRECTIVA + '/perfil.png'){
  //         const url = await getDownloadURL(item);
  //         element.src = url
  //       }
  //     })   

  //   })
  // }

}
