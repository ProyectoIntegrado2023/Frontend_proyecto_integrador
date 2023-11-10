import { Component } from '@angular/core';
import { Actividad } from 'src/app/core/model/index.frontend';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent {
  listaActividad: Actividad[] = []

  agregarActividad(){
    let actividad: Actividad = Actividad.init();
    this.listaActividad.push(actividad);
  }

  eliminarActividad(actividad: Actividad) {
    const index = this.listaActividad.indexOf(actividad);
    if (index > -1) {
      this.listaActividad.splice(index, 1);
    }
  }

  enviarObjecto() {
    console.log(this.listaActividad);
  }
}
