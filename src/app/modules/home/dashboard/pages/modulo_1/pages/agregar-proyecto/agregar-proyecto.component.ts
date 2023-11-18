import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/core/services/index.services.https';
import { Acceso, Proyecto } from 'src/app/core/model/index.frontend';
import { UpdateEffectProjectService } from 'src/app/core/services/index.services.status';
import { existeItemLocalStorage } from 'src/app/core/function/localStorage/validarLocalStorage';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  listAccesso: Acceso[] = []
  proyecto!: Proyecto
  constructor(
    private router: Router,
    private accessService: AccessService,
  ){}

  ngOnInit(): void {
    const currentUrl = this.router.url;
    this.accessService.getAll().subscribe(data => {
      const idPadre = this.findAccessIdByURL(data, currentUrl);
      this.listAccesso = data.filter(v => v.id_acceso_padre === idPadre);
    });
  }

  private findAccessIdByURL(data: Acceso[], currentUrl: string): number | null {
      const parts = currentUrl.split('/');
      let idPadre = null;
  
      for (let i = parts.length; i >= 0; i--) {
        
        const partialUrl = parts.slice(0, i).join('/');
        const access = data.find(v => '/' + v.url === partialUrl);
        
        if (access) {
          idPadre = access.id_acceso_padre;
          break;
        }
      }  
      return idPadre;
  }

  public navegar(acceso: Acceso){
    this.router.navigate([acceso.url]);
  }

  public validarAcceso(index: number): boolean {
    let validado = false;
    if(index != 0) {
      validado = existeItemLocalStorage('proyecto');
    } else {
      validado = true;
    }
    return validado;
  }
}
