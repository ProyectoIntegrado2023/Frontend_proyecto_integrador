import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { determinarUrl } from 'src/app/core/function/recopilarUrl/determinarUrl';

import { NOMBRE_PAGINA_WEB } from 'src/app/core/global/const-global';
import { Acceso } from 'src/app/core/model/index.frontend';
import { AccessService } from 'src/app/core/services/index.services.https';
import { UpdateEffectProjectService, SelectEffectAccessService, SelectEffectModuleService, UpdateEffectPlantillaService } from 'src/app/core/services/index.services.status';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  
  subscriptionAcceso!: Subscription;
  subscriptionSeleccionAcceso!: Subscription;
  modulo: string = ''
  titulo: string = NOMBRE_PAGINA_WEB
  
  accesos: Acceso[] = []
  statusSidebar:boolean = true
  AccesoSeleccionado: number = 0

  constructor(
    private router: Router,
    private accessService: AccessService,
    private _statusProject: UpdateEffectProjectService,
    private _selectAccess: SelectEffectAccessService,
    private _selecctModule: SelectEffectModuleService,
    private _updateEffectPlantilla: UpdateEffectPlantillaService,
  ){}

  ngOnInit(): void {
    this._selecctModule.get().subscribe(m => {
      this.obtenerAccesos(m);
    });
  }

  ngOnDestroy(): void {
    this.resetear();
    if(this.subscriptionSeleccionAcceso){
      this._selectAccess.reset();
      this.subscriptionSeleccionAcceso.unsubscribe();
    }
    if(this.subscriptionAcceso){
      this.subscriptionAcceso.unsubscribe();
    }
  }

  private obtenerAccesos(idAccesoPadre: number): void {
    this.subscriptionAcceso = this.accessService.getAll().subscribe( accesos => {
      if(idAccesoPadre == 0) {
        const url = determinarUrl(this.router.url, 'modulo');
        const accesoPadre = accesos.find(v => v.id_acceso_padre == null && v.url == url);
        idAccesoPadre = accesoPadre?.id ?? 0;
      }
      this.modulo = accesos.find(m => m.id == idAccesoPadre)?.titulo ?? '';
      this.accesos = accesos.filter(v => v.id_acceso_padre == idAccesoPadre);
      this.determinarAccesoSeleccionado();
    });
  }

  private determinarAccesoSeleccionado() {
    this.subscriptionSeleccionAcceso = this._selectAccess.get().subscribe(seleccionado => {
      if(seleccionado != 0) {
        this.AccesoSeleccionado = seleccionado;
      } else {
        this.AccesoSeleccionado = this.accesos[0].id ?? 0;
      }
    })
  }

  public navegar(acceso: Acceso) {
    if(acceso.id != null) {
      this._selectAccess.emit(acceso.id);
      this.resetear();
      this.router.navigate([acceso.url]); 
    }
  }

  private resetear() {
    localStorage.removeItem('proyecto');
    localStorage.removeItem('plantilla');
    this._statusProject.reset();
    this._updateEffectPlantilla.reset();
  }
  public effectSidebar(){
    this.statusSidebar = ! this.statusSidebar;
  }

  public regresarHome(): void {
    this.resetear();
    this.router.navigate(['/home']);
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: any): void {
    if( window.innerWidth <= 800 && this.statusSidebar){
      this.statusSidebar = false;
    }
  }
}
