import { Component, OnInit } from '@angular/core';
import { notificacionPromesa, notificacionSimple } from 'src/app/core/function/SweetAlert/alertDinamic';
import { Facultad } from 'src/app/core/model/index.frontend';
import { FacultadService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-mantener-facultad',
  templateUrl: './mantener-facultad.component.html',
  styleUrls: ['./mantener-facultad.component.css']
})
export class MantenerFacultadComponent implements OnInit {
  listaFacultad: Facultad[] = [];
  facultad: Facultad = Facultad.init();

  constructor(
    private facultadService: FacultadService
  ){}

  ngOnInit(): void {
    this.facultadService.getAll().subscribe(res => {
      this.listaFacultad = res;
    })
  }

  public editar(obj: Facultad) {
    this.facultad = obj;
    this.listaFacultad = this.listaFacultad.filter(facultad => facultad.id != obj.id);
  }

  public cancelar() {
    if(this.facultad.id != 0) {
      this.listaFacultad.push(this.facultad);
    }
    this.facultad = Facultad.init();
  }

  public guardar() {
    if(this.facultad.id != 0) {
      this.facultadService.update(this.facultad).subscribe(
        (res) => {
          this.listaFacultad.push(res);
          this.facultad = Facultad.init();
          notificacionSimple('Actualizado', 'se actualizo la Facultad exitosamente', 'success');
        },
        (err) => {
          notificacionSimple('Error', 'No se pudo actualizar la Facultad', 'error');
        }
      )
    } else {
      this.facultadService.save(this.facultad).subscribe(
        (res) => {
          this.listaFacultad.push(res);
          this.facultad = Facultad.init();
          notificacionSimple('Agregado', 'se agrego la Facultad exitosamente', 'success');
        },
        (err) => {
          notificacionSimple('Error', 'No se pudo agregar la Facultad', 'error');
        }
      )
    }
  }
  public eliminar(id: number) {
    notificacionPromesa('¿Estas seguro de eliminar esta Facultad?', 'Eliminar Facultad', false, '', true)
    .then(res => {
      if(res) {
        this.facultadService.delete(id).subscribe(
          (res) => {
            this.listaFacultad = this.listaFacultad.filter(facultad => facultad.id != id);
            notificacionSimple('Eliminado', 'se elimino la Facultad exitosamente', 'success');
          },
          (err) => {
            notificacionSimple('Error', 'No se pudo eliminar la Facultad', 'error');
          }
        )
      }
    })
  }

}
