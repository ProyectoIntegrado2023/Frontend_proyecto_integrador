import { Component, OnInit } from '@angular/core';
import { notificacionPromesa, notificacionSimple } from 'src/app/core/function/SweetAlert/alertDinamic';

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
    notificacionPromesa('¿Desea eliminar esta actividad?', 'Eliminar', true, 'No eliminar',true)
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
        (res) => notificacionSimple('Actividad eliminada', 'Actividad eliminada con exito', 'success'),
        (err) => notificacionSimple('Error', 'Ocurrio un error', 'error')
      )
    }  
  }

  public enviarObjecto() {
    for(let actividad of this.listaActividad) {
      if(actividad.id != 0) {
        this.actividadService.update(actividad).subscribe(
          (res) => notificacionSimple('Actividad actualizada', 'Actividad actualizada con exito', 'success'),
          (err) => notificacionSimple('Error', 'Ocurrio un error', 'error')
        )
      } else {
        const proyecto: Proyecto = Proyecto.init();
        proyecto.id = recopilarProyecto().id;
        actividad.proyecto = proyecto;
        this.actividadService.save(actividad).subscribe(
          (res) => notificacionSimple('Actividad guardada', 'Actividad guardada con exito', 'success'),
          (err) => notificacionSimple('Error', 'Ocurrio un error', 'error')
        )
      }
    }
  }
}
