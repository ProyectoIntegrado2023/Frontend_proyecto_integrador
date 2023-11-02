import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NOMBRE_PAGINA_WEB } from '../../core/global/const-global';
import { Acceso, Persona } from 'src/app/core/model/index.frontend';
import { AccessService } from 'src/app/core/index.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptionAcceso!: Subscription;
  accesos: Acceso[] = [];
  persona: Persona = Persona.init();
  titulo: string = NOMBRE_PAGINA_WEB;

  constructor(
    private router: Router,
    private accessService: AccessService,
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
    this.router.navigate([module.url]);
  }

  public cerrarSesion(): void {
    this.router.navigate(['/log-in']);
  }
}
