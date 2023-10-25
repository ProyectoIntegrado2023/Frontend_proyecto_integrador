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
    const segments = this.router.url.split('/');
    const position = segments.findIndex(v => v == 'modulo');
    const numeroDeRuta = parseFloat(segments[position + 1]);
    
    this.subscription = this.accessService.getAll().subscribe(data => {
      this.modulo = data.find(v => v.id == numeroDeRuta)?.titulo ?? 'no existe';
      this.accesos = data.filter(v => v.id_acceso_padre == numeroDeRuta);
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
