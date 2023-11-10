import { RolNegocioService } from '../../../../../../../../core/services/https/rol-negocio.service';
import { Component, OnInit } from '@angular/core';
import { RolNegocio, RolProyecto } from 'src/app/core/model/index.frontend';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  listaRolNegocio: RolNegocio[] = []
  listaRolProyecto: RolProyecto[] = []

  constructor(
    private rolNegocioService: RolNegocioService
  ) {}

  ngOnInit(): void {
      this.rolNegocioService.getAll().subscribe(data => {
        this.listaRolNegocio = data
      })
  }

  public agregarRol(rolNegocio: RolNegocio) {
    const noExisteRolProyecto: boolean = !this.listaRolProyecto.some(rp => rp.rol_negocio.id == rolNegocio.id);

    if( noExisteRolProyecto ){
      let rolProyecto: RolProyecto = RolProyecto.init();
      rolProyecto.rol_negocio = rolNegocio;
      this.listaRolProyecto.push( rolProyecto );
    } else {
      this.listaRolProyecto = this.listaRolProyecto.filter(rp => rp.rol_negocio.id != rolNegocio.id);
    }
  }  

  public enviarObjecto(){
    console.log(this.listaRolProyecto);
  }
}
