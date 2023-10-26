import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  listaRolNegocio: any[] = []
  listaRolProyecto: any[] = []

  ngOnInit(): void {
      this.listaRolNegocio = [
        {
          id: 1,
          nombre: 'Encargado'
        },
        {
          id: 2,
          nombre: 'Lider'
        },
        {
          id: 3,
          nombre: 'Colaborador'
        },
        {
          id: 4,
          nombre: 'Supervisor'
        },
        {
          id: 5,
          nombre: 'Administrador'
        },
        {
          id: 6,
          nombre: 'Coordinador'
        },
        {
          id: 7,
          nombre: 'Director'
        },
        {
          id: 8,
          nombre: 'Gerente'
        }
      ]
  }

  public agregarRol(id: number) {
    const noExisteRolProyecto: boolean = !this.listaRolProyecto.some(rol => rol.id == id);

    if( noExisteRolProyecto ){
      this.listaRolProyecto.push( this.listaRolNegocio.find(rol => rol.id == id) );
    } else {
      this.listaRolProyecto = this.listaRolProyecto.filter(rol => rol.id != id);
    }
  }  
}
