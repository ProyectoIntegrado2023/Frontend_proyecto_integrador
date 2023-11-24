import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plantilla, Proyecto } from 'src/app/core/model/index.frontend';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  plantilla!: Plantilla
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.plantilla = JSON.parse(localStorage.getItem('plantilla')!);
  }
  public navegar(){
    this.router.navigate(['/home/modulo/1/plantilla/listar']);
  }
}
