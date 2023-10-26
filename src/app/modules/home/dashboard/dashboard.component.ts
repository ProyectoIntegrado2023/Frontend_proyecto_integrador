import { AccessService } from './../../../core/services/access.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acceso } from 'src/app/core/model/frontend/acceso.model';
import { constGlobal } from '../../../core/global/const-global';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  
  private subscription!: Subscription;
  titulo: string = constGlobal.NOMBRE_PAGINA_WEB
  modulo: string = ''
  accesos: Acceso[] = []
  statusSidebar:boolean = true

  constructor(
    private router: Router,
    private accessService: AccessService
  ){}

  ngOnInit(): void {
    const currentUrl = this.router.url;
    const parts = currentUrl.split('/');
    const url = parts.slice(1, parts.indexOf('modulo') + 2).join('/')

    this.subscription = this.accessService.getAll().subscribe(data => {
      const accesoPadre = data.find(v => v.id_acceso_padre == null && v.url == url);
      this.modulo = accesoPadre?.titulo ?? '';
      this.accesos = data.filter(v => v.id_acceso_padre == accesoPadre?.id);
    });

  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  public navegar(acceso: Acceso) {
    this.router.navigate([acceso.url]);
  }

  public effectSidebar(){
    this.statusSidebar = ! this.statusSidebar;
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: any): void {
    if( window.innerWidth <= 800 && this.statusSidebar){
      this.statusSidebar = false;
    }
  }

  public regresarHome(): void {
    this.router.navigate(['/home']);
  }
}
