import { Component, OnInit } from '@angular/core';
import { notificacionConfirmacionEliminar, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';
import { Estado } from 'src/app/core/model/index.frontend';
import { EstadoService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-mantener-estado',
  templateUrl: './mantener-estado.component.html',
  styleUrls: ['./mantener-estado.component.css']
})
export class MantenerEstadoComponent implements OnInit {
  listaEstado: Estado[] = [];
  estado: Estado = Estado.init();

  constructor(
    private estadoService: EstadoService
  ){}

  ngOnInit(): void {
    this.estadoService.getAll().subscribe(res => {
      this.listaEstado = res
    })
  }

  public cancelar() {
    if(this.estado.id != 0) {
      this.listaEstado.push(this.estado);
    }
    this.estado = Estado.init();
  }

  public editar(obj: Estado){
    this.estado = obj;
    this.listaEstado = this.listaEstado.filter(x => x.id != obj.id);
  }

  public guardar(){
    if(this.estado.id != 0) {
      this.estadoService.update(this.estado).subscribe(
        (res) => {
          this.estado = Estado.init();
          this.listaEstado.push(res);
          notificacionSimpleDinamico('Actualizado', 'se actualizo el estado exitosamente', 'success');
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo actualizar el estado', 'error');
        }
      )
    } else {
      this.estadoService.save(this.estado).subscribe(
        (res) => {
          this.estado = Estado.init();
          this.listaEstado.push(res);
          notificacionSimpleDinamico('Agregado', 'se agrego el estado exitosamente', 'success');
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo agregar el estado', 'error');
        }
      )
    }
  }

  public eliminar(id: number){
    notificacionConfirmacionEliminar('¿Estas seguro de eliminar este estado?', false, 'Eliminar', true, '')
    .then(res => {
      if(res) {
        this.estadoService.delete(id).subscribe(
          (res) => {
            this.listaEstado = this.listaEstado.filter(estado => estado.id != id);
            notificacionSimpleDinamico('Eliminado', 'se elimino el estado exitosamente', 'success');
          },
          (err) => {
            notificacionSimpleDinamico('Error', 'No se pudo eliminar el estado', 'error');
          }
        )
      }
    })
  }
}
