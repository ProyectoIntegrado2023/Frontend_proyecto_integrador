import { RolProyectoService } from './../../../../../../../../core/services/https/rol-proyecto.service';
import { RolNegocioService } from '../../../../../../../../core/services/https/rol-negocio.service';
import { Component, OnInit } from '@angular/core';
import { recopilarProyecto } from 'src/app/core/function/localStorage/recopilarLocalStorage';
import { RolNegocio, RolProyecto } from 'src/app/core/model/index.frontend';
import { forkJoin } from 'rxjs';
import { notificacionPromesa, notificacionSimple } from 'src/app/core/function/SweetAlert/alertDinamic';
import { obtenerIdsAEliminar } from 'src/app/core/function/generacion/obtenerIdsEliminados';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  listaRolNegocio: RolNegocio[] = []
  listaRolProyecto: RolProyecto[] = []
  listaRolProyectoCopia: RolProyecto[] = []

  constructor(
    private rolNegocioService: RolNegocioService,
    private rolProyectoService: RolProyectoService
  ) {}

  ngOnInit(): void {
      this.rolNegocioService.getAll().subscribe(data => {
        this.listaRolNegocio = data
      })
      this.recopilarRolProyecto();
  }

  private recopilarRolProyecto() {
    this.rolProyectoService.getAll().subscribe(data => {
      this.listaRolProyecto = data.filter(rp => rp.proyecto?.id == recopilarProyecto().id); 
      this.listaRolProyectoCopia = this.listaRolProyecto; 
    })
  }

  public agregarRol(rolNegocio: RolNegocio) {
    const noExisteRolProyecto: boolean = !this.listaRolProyecto.some(rp => rp.rol_negocio?.id == rolNegocio.id);

    if( noExisteRolProyecto ){
      let rolProyecto: RolProyecto = RolProyecto.init();
      rolProyecto.rol_negocio = rolNegocio;
      this.listaRolProyecto.push( rolProyecto );
    } else {
      this.listaRolProyecto = this.listaRolProyecto.filter(rp => rp.rol_negocio?.id != rolNegocio.id);
    }
  }  

  public verificarRolNegocio(rolNegocio: RolNegocio): boolean {
    return this.listaRolProyecto.some(rp => rp.rol_negocio?.id == rolNegocio.id);
  }

  public enviarObjecto(){
    const idEliminados = obtenerIdsAEliminar(this.listaRolProyecto, this.listaRolProyectoCopia);
    if(idEliminados.length > 0) {
      notificacionPromesa('Existe algunos elementos que se eliminaran', 'Eliminar y continuar', false, '', true)
      .then((result) => {
        if(result) this.eliminarElementos(idEliminados);
      })
    } else {
      this.guardarCambios();
    }
  }

  private eliminarElementos(ids: number[]) {
    const observables = ids.map(id => {
      return this.rolProyectoService.delete(id);
    })

    forkJoin(observables).subscribe(
      (resultados) => {
        this.guardarCambios();
      },
      (error) => {
        notificacionSimple('Error', 'Ocurrio un error', 'error');
      }
    )
  }

  private guardarCambios(){
    const observables = this.listaRolProyecto.map(rp => {
      rp.proyecto = recopilarProyecto();
      const existe = this.listaRolProyectoCopia.some(rpCopia => rpCopia.id = rp.id);
      if(existe) {
        return this.rolProyectoService.update(rp);  
      } else {
        return this.rolProyectoService.save(rp);
      }
    });

    forkJoin(observables).subscribe(
      (resultados) => {
        this.listaRolProyecto = resultados;
        this.listaRolProyectoCopia = resultados;
        notificacionSimple('¡Guardado!', 'Se guardo todo correctamente', 'success');
      },
      (error) => {
        notificacionSimple('Error', 'Ocurrio un error', 'error');
      }
    );
  }

  public cancelarCambios() {
    notificacionPromesa('¿Desea eliminar sus cambios?', 'Si, continuar', false, '', true).then((result) => {
      if (result) {
        this.recopilarRolProyecto();
      }
    })
  }
}
