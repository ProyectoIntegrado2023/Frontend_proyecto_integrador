import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleView } from 'src/app/core/model/moduleView.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moduleView: ModuleView[] = []

  constructor( private router:Router){}

  ngOnInit(): void {
    this.moduleView = [
      {
        titulo: 'Gestionar proyecto',
        icon: 'book',
        url: 'home/modulo-1'
      },
      {
        titulo: 'Ejecutar proyecto',
        icon: 'calendar',
        url: 'home/modulo-2'
      },
      {
        titulo: 'Consultar horas',
        icon: 'hourglass',
        url: 'home/modulo-3'
      },
      {
        titulo: 'Gestionar usuario',
        icon: 'user',
        url: 'home/modulo-4'
      }
    ];
  }

  cerrarSesion(): void{
    this.router.navigate(['/log-in']);
  }
}
