import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/core/model/index.frontend';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  proyecto!: Proyecto
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.proyecto = JSON.parse(localStorage.getItem('proyecto')!); 
  }
  public navegar(){
    this.router.navigate(['/home/modulo/1/proyecto/listar']);
  }
}
