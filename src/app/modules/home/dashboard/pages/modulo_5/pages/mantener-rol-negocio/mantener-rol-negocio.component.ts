import { Component, OnInit } from '@angular/core';
import { notificacionPromesa, notificacionSimple } from 'src/app/core/function/SweetAlert/alertDinamic';
import { RolNegocio } from 'src/app/core/model/index.frontend';
import { RolNegocioService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-mantener-rol-negocio',
  templateUrl: './mantener-rol-negocio.component.html',
  styleUrls: ['./mantener-rol-negocio.component.css']
})
export class MantenerRolNegocioComponent implements OnInit {
  listaRolNegocio: RolNegocio[] = []
  rolNegocio: RolNegocio = RolNegocio.init()

  constructor(
    private rolNegocioService: RolNegocioService
  ){}

  ngOnInit(): void {
    this.rolNegocioService.getAll().subscribe(res => this.listaRolNegocio = res)
  }

  public guardar(){
    if(this.rolNegocio.id != 0){
      this.rolNegocioService.update(this.rolNegocio).subscribe(
        (res) => {
          this.rolNegocio = RolNegocio.init()
          this.rolNegocioService.getAll().subscribe(res => this.listaRolNegocio = res)
          notificacionSimple('Actualizado', 'se actualizo el rol de negocio exitosamente', 'success')
        },
        (err) => {
          notificacionSimple('Error', 'No se pudo actualizar el rol de negocio', 'error')
        }
      )
    } else {
      this.rolNegocioService.save(this.rolNegocio).subscribe(
        (res) => {
          this.rolNegocio = RolNegocio.init()
          this.rolNegocioService.getAll().subscribe(res => this.listaRolNegocio = res)
          notificacionSimple('Agregado', 'se agrego el rol de negocio exitosamente', 'success')
        },
        (err) => {
          notificacionSimple('Error', 'No se pudo agregar el rol de negocio', 'error')
        })
    }
  }

  public eliminar(id: number){
    notificacionPromesa('¿Estas seguro de eliminar este rol de negocio?', 'Si,eliminar', false, '', true)
    .then(res => {
      if(res) {
        this.rolNegocioService.delete(id).subscribe(
          (res) => {
            this.rolNegocioService.getAll().subscribe(res => this.listaRolNegocio = res)
            notificacionSimple('Eliminado', 'se elimino el rol de negocio exitosamente', 'success')
          },
          (err) => {
            notificacionSimple('Error', 'No se pudo eliminar el rol de negocio', 'error')
          }
        )
      }
    })
  }

  public editar(rolNegocio: RolNegocio){
    this.rolNegocio = rolNegocio;
    this.listaRolNegocio = this.listaRolNegocio.filter(x => x.id != rolNegocio.id);
  }

  public cancelar(){
    if(this.rolNegocio.id != 0){
      this.listaRolNegocio.push(this.rolNegocio);
    }
    this.rolNegocio = RolNegocio.init()
  }

}
  