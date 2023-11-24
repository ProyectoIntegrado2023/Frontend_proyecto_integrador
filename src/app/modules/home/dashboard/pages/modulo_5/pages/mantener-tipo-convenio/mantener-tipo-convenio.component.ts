import { Component, OnInit } from '@angular/core';
import { notificacionConfirmacionEliminar, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';
import { TipoConvenio } from 'src/app/core/model/index.frontend';
import { TipoConvenioService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-mantener-tipo-convenio',
  templateUrl: './mantener-tipo-convenio.component.html',
  styleUrls: ['./mantener-tipo-convenio.component.css']
})
export class MantenerTipoConvenioComponent implements OnInit {
  listaConvenio: TipoConvenio[] = [];
  tipoConvenio: TipoConvenio = TipoConvenio.init();
  
  constructor(
    private tipoConvenioService: TipoConvenioService
  ){}

  ngOnInit(): void {
    this.tipoConvenioService.getAll().subscribe(res => {
      this.listaConvenio = res;
    })
  }

  public cancelar(){
    if(this.tipoConvenio.id != 0) {
      this.listaConvenio.push(this.tipoConvenio);
    }
    this.tipoConvenio = TipoConvenio.init();
  }

  public editar(obj: TipoConvenio){
    this.tipoConvenio = obj;
    this.listaConvenio = this.listaConvenio.filter(x => x.id != obj.id);
  }

  public guardar(){
    if(this.tipoConvenio.id != 0){
      this.tipoConvenioService.update(this.tipoConvenio).subscribe(
        (res) => {
          this.tipoConvenio = TipoConvenio.init();
          this.listaConvenio.push(res);
          notificacionSimpleDinamico('Actualizado', 'se actualizo el convenio exitosamente', 'success');
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo actualizar el convenio', 'error');
        }
      );
    } else {
      this.tipoConvenioService.save(this.tipoConvenio).subscribe(
        (res) => {
          this.tipoConvenio = TipoConvenio.init();
          this.listaConvenio.push(res);
          notificacionSimpleDinamico('Agregado', 'se agrego el convenio exitosamente', 'success');
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo agregar el convenio', 'error');
        }
      )
    }
  }

  public eliminar(id: number){
    notificacionConfirmacionEliminar('¿Estas seguro de eliminar este convenio?', false, 'Eliminar', true, '')
    .then(res => {
      if(res) {
        this.tipoConvenioService.delete(id).subscribe(
          (res) => {
            this.listaConvenio = this.listaConvenio.filter(convenio => convenio.id != id);
            notificacionSimpleDinamico('Eliminado', 'se elimino el convenio exitosamente', 'success');
          },
          (err) => {
            notificacionSimpleDinamico('Error', 'No se pudo eliminar el convenio', 'error');
          }
        )
      }
    })
  }
}
