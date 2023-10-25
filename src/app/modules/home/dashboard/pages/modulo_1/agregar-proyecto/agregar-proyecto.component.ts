import { Acceso } from 'src/app/core/model/frontend/acceso.model';
import { AccessService } from './../../../../../../core/services/access.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/core/model/frontend/proyecto.model';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  listAccesso: Acceso[] = []
  proyecto!: Proyecto
  
  constructor(private accessService: AccessService, 
              private router: Router){}

  ngOnInit(): void {
    const currentUrl = this.router.url;
    
    this.accessService.getAll().subscribe(data => {
      
      const idPadre = this.findAccessIdByURL(data, currentUrl);
      this.listAccesso = data.filter(v => v.id_acceso_padre === idPadre);
      
    });
  }

  findAccessIdByURL(data: Acceso[], currentUrl: string): number | null {
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

  navegar(acceso: Acceso){
    this.router.navigate([acceso.url]);
  }
}
