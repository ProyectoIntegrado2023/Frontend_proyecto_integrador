import { Component, OnInit } from '@angular/core';
import { notificacionConfirmacionEliminar, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';
import { Escuela, Facultad } from 'src/app/core/model/index.frontend';
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
          notificacionSimpleDinamico('Actualizado', 'se actualizo la Escuela exitosamente', 'success')
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo actualizar la Escuela', 'error')
        }
      )
    } else {
      this.escuelaService.save(this.escuela).subscribe(
        (res) => {
          this.escuela = Escuela.init()
          this.escuelaService.getAll().subscribe(res => this.listaEscuela = res)
          notificacionSimpleDinamico('Agregado', 'se agrego la Escuela exitosamente', 'success')
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo agregar la Escuela', 'error')
        })
      }
  }

  public editar(obj: Escuela){
    this.escuela = obj
    this.facultad = obj.facultad ?? Facultad.init()
    this.listaEscuela = this.listaEscuela.filter(escuela => escuela.id != obj.id)
  }

  public eliminar(id: number){
    notificacionConfirmacionEliminar('¿Estas seguro de eliminar esta Escuela?', false, 'Eliminar Escuela', true, '')
    .then(
      res => {
        if(res) {
          this.escuelaService.delete(id).subscribe(
            (res) => {
              this.escuelaService.getAll().subscribe(res => this.listaEscuela = res)
              notificacionSimpleDinamico('Eliminado', 'se elimino la Escuela exitosamente', 'success')
            },
            (err) => {
              notificacionSimpleDinamico('Error', 'No se pudo eliminar la Escuela', 'error')
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
