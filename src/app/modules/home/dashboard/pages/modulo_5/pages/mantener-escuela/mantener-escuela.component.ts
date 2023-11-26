import { Component, OnInit } from '@angular/core';
import { Escuela, Facultad } from 'src/app/core/model/index.frontend';
import { notificacionPromesa, notificacionSimple } from 'src/app/core/function/SweetAlert/alertDinamic';
import { EscuelaService, FacultadService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-mantener-escuela',
  templateUrl: './mantener-escuela.component.html',
  styleUrls: ['./mantener-escuela.component.css']
})
export class MantenerEscuelaComponent implements OnInit {
  listaEscuela: Escuela[] = []
  listaFacultad: Facultad[] = []
  escuela: Escuela = Escuela.init()
  facultad: Facultad = Facultad.init()
  constructor(
    private escuelaService: EscuelaService,
    private facultadService: FacultadService,
  ){}

  ngOnInit(): void {
    this.escuelaService.getAll().subscribe(res => this.listaEscuela = res)
    this.facultadService.getAll().subscribe(res => this.listaFacultad = res)
  }

  public guardar(){
    if(this.facultad.id != 0) {
      this.escuela.facultad = this.facultad;
    }
    if(this.escuela.id != 0){
      this.escuelaService.update(this.escuela).subscribe(
        (res) => {
          this.escuela = Escuela.init()
          this.escuelaService.getAll().subscribe(res => this.listaEscuela = res)
          notificacionSimple('Actualizado', 'se actualizo la Escuela exitosamente', 'success')
        },
        (err) => {
          notificacionSimple('Error', 'No se pudo actualizar la Escuela', 'error')
        }
      )
    } else {
      this.escuelaService.save(this.escuela).subscribe(
        (res) => {
          this.escuela = Escuela.init()
          this.escuelaService.getAll().subscribe(res => this.listaEscuela = res)
          notificacionSimple('Agregado', 'se agrego la Escuela exitosamente', 'success')
        },
        (err) => {
          notificacionSimple('Error', 'No se pudo agregar la Escuela', 'error')
        })
      }
  }

  public editar(obj: Escuela){
    this.escuela = obj
    this.facultad = obj.facultad ?? Facultad.init()
    this.listaEscuela = this.listaEscuela.filter(escuela => escuela.id != obj.id)
  }

  public eliminar(id: number){
    notificacionPromesa('¿Estas seguro de eliminar esta Escuela?', 'Eliminar Escuela', false, '', true)
    .then(
      res => {
        if(res) {
          this.escuelaService.delete(id).subscribe(
            (res) => {
              this.escuelaService.getAll().subscribe(res => this.listaEscuela = res)
              notificacionSimple('Eliminado', 'se elimino la Escuela exitosamente', 'success')
            },
            (err) => {
              notificacionSimple('Error', 'No se pudo eliminar la Escuela', 'error')
            }
          )
        }
      }
    )
  }

  public cancelar(){
    if(this.escuela.id != 0) {
      this.listaEscuela.push(this.escuela);
    }
    this.escuela = Escuela.init()
    this.facultad = Facultad.init()
  }

}
