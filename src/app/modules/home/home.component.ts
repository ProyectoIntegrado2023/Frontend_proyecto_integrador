import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NOMBRE_PAGINA_WEB } from '../../core/global/const-global';
import { Acceso, Persona } from 'src/app/core/model/index.frontend';
import { AccessService } from 'src/app/core/services/index.services.https';
import { SelectEffectModuleService } from 'src/app/core/services/index.services.status';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  
  titulo: string = NOMBRE_PAGINA_WEB;
  subscriptionAcceso!: Subscription;
  persona: Persona = Persona.init();
  accesos: Acceso[] = [];

  constructor(
    private router: Router,
    private accessService: AccessService,
    private _selecctModule: SelectEffectModuleService,
  ) {}
  
  ngOnInit(): void {
    this.persona = JSON.parse(localStorage.getItem('persona')!);

    this.subscriptionAcceso = this.accessService.getAll().subscribe(data => {
      this.accesos = data.filter(v => v.id_acceso_padre == null);
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptionAcceso) {
      this.subscriptionAcceso.unsubscribe();
    }
  }

  public navegar(module: Acceso) {
    if(module.id != null) {
      this._selecctModule.emit(module.id);
      this.router.navigate([module.url]);
    }
  }

  public cerrarSesion(): void {
    this.router.navigate(['/log-in']);
  }
}
