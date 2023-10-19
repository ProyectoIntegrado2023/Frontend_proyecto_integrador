import { AccessService } from './../../core/services/access.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleView } from 'src/app/core/model/moduleView.model';
import { constGlobal } from '../../core/global/const-global';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;
  moduleView: ModuleView[] = [];
  titulo: string = constGlobal.NOMBRE_PAGINA_WEB;

  constructor( 
    private router: Router, 
    private accessService: AccessService
  ){}

  ngOnInit(): void {
    this.subscription = this.accessService.getAll().subscribe(data => {
      this.moduleView = data.filter(v => v.id_acceso_padre == null);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public navegar(module: ModuleView){
    this.router.navigate([module.url]);
  }

  public cerrarSesion(): void{
    this.router.navigate(['/log-in']);
  }

}
