import { Component, OnInit } from '@angular/core';
import { notificacionConfirmacionEliminar, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';

import { recopilarProyecto } from 'src/app/core/function/localStorage/recopilarLocalStorage';
import { Actividad, Proyecto } from 'src/app/core/model/index.frontend';
import { ActividadService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  listaActividad: Actividad[] = []

  constructor(
    private actividadService: ActividadService,
  ){}
  ngOnInit(): void {
    this.actividadService.getAll().subscribe(arrayActividades =>{
      this.listaActividad = arrayActividades.filter(act => act.proyecto?.id == recopilarProyecto().id);
    })
  }

  public agregarActividad(){
    let actividad: Actividad = Actividad.init();
    this.listaActividad.push(actividad);
  }

  public eliminarActividad(actividad: Actividad) {
    notificacionConfirmacionEliminar('¿Desea eliminar esta actividad?', true, 'Eliminar', true, 'No eliminar')
      .then((result) => {
        if(result) {
          this.eliminar(actividad);
        }
      })
  }

  private eliminar(actividad: Actividad) {
    this.listaActividad = this.listaActividad.filter(act => act != actividad);
    if(actividad.id != 0 && actividad.id != null){
      this.actividadService.delete(actividad.id).subscribe(
        (res) => notificacionSimpleDinamico('Actividad eliminada', 'Actividad eliminada con exito', 'success'),
        (err) => notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error')
      )
    }  
  }

  public enviarObjecto() {
    for(let actividad of this.listaActividad) {
      if(actividad.id != 0) {
        this.actividadService.update(actividad).subscribe(
          (res) => notificacionSimpleDinamico('Actividad actualizada', 'Actividad actualizada con exito', 'success'),
          (err) => notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error')
        )
      } else {
        const proyecto: Proyecto = Proyecto.init();
        proyecto.id = recopilarProyecto().id;
        actividad.proyecto = proyecto;
        this.actividadService.save(actividad).subscribe(
          (res) => notificacionSimpleDinamico('Actividad guardada', 'Actividad guardada con exito', 'success'),
          (err) => notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error')
        )
      }
    }
  }
}
