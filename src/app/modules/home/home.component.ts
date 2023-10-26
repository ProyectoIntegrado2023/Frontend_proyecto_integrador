import { AccessService } from './../../core/services/access.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acceso } from 'src/app/core/model/frontend/acceso.model';
import { constGlobal } from '../../core/global/const-global';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/core/model/frontend/persona.model';
import { PersonaService } from 'src/app/core/services/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptionAcceso!: Subscription;
  private subscriptionPersona!: Subscription;
  accesos: Acceso[] = [];
  persona: Persona = new Persona();
  titulo: string = constGlobal.NOMBRE_PAGINA_WEB;

  constructor(
    private router: Router,
    private accessService: AccessService,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    const id: number = parseInt(localStorage.getItem('usuario_id')!);
    this.subscriptionPersona = this.personaService.getById(id).subscribe(data => {
      this.persona = data;
    })

    this.subscriptionAcceso = this.accessService.getAll().subscribe(data => {
      this.accesos = data.filter(v => v.id_acceso_padre == null);
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptionAcceso) {
      this.subscriptionAcceso.unsubscribe();
    }

    if (this.subscriptionPersona) {
      this.subscriptionPersona.unsubscribe();
    }
  }

  public navegar(module: Acceso) {
    this.router.navigate([module.url]);
  }

  public cerrarSesion(): void {
    this.router.navigate(['/log-in']);
  }
}
