import { Component, OnInit } from '@angular/core';
import { Ciclo, Escuela } from 'src/app/core/model/index.frontend';
import { CicloService, EscuelaService } from 'src/app/core/services/index.services.https';
import { notificacionConfirmacionEliminar, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';

@Component({
  selector: 'app-mantener-ciclo',
  templateUrl: './mantener-ciclo.component.html',
  styleUrls: ['./mantener-ciclo.component.css']
})
export class MantenerCicloComponent implements OnInit {
  listaCiclo: Ciclo[] = [];
  listaEscuela: Escuela[] = [];
  ciclo: Ciclo = Ciclo.init();

  constructor(
    private cicloService: CicloService,
    private escuelaService: EscuelaService
  ){}

  ngOnInit(): void {
    this.inicialiarCiclo();
    this.cicloService.getAll().subscribe(resp => {
      this.listaCiclo = resp;
    })
    this.escuelaService.getAll().subscribe(resp => {
      this.listaEscuela = resp;
    })
  }
  public inicialiarCiclo() {
    if(this.ciclo.id != 0) {
      this.listaCiclo.push(this.ciclo);
    }
    this.ciclo = Ciclo.init();
    this.ciclo.escuela = Escuela.init();
  }

  public eliminar(id: number){
    notificacionConfirmacionEliminar('¿Estas seguro de eliminar este Ciclo?', false, 'Eliminar ciclo', true, '')
    .then(resp => {
      if(resp) {
        this.cicloService.delete(id).subscribe(
          (resp) => {
            notificacionSimpleDinamico('Eliminado', 'se elimino el ciclo exitosamente', 'success');
            this.listaCiclo = this.listaCiclo.filter(ciclo => ciclo.id != id);
          },
          (err) => {
            notificacionSimpleDinamico('Error', 'No se pudo eliminar el Ciclo', 'error');
          }
        )
      }
    })
  }

  public editar(obj: Ciclo) {
    this.ciclo = obj;
    this.listaCiclo = this.listaCiclo.filter(ciclo => ciclo.id != obj.id);
  }

  public guardar() {
    if(this.ciclo.id != 0) {
      this.cicloService.update(this.ciclo).subscribe(
        (resp) => {
          this.inicialiarCiclo();
          this.listaCiclo.push(resp);
          console.log(resp);
          notificacionSimpleDinamico('Actualizado', 'se actualizo el Ciclo exitosamente', 'success');
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo actualizar el Ciclo', 'error');
        }
      )
    } else {
      this.cicloService.save(this.ciclo).subscribe(
        (resp) => {
          this.inicialiarCiclo();
          this.listaCiclo.push(resp);
          console.log(resp);
          notificacionSimpleDinamico('Agregado', 'se agrego el Ciclo exitosamente', 'success');
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo agregar el Ciclo', 'error');
        }
      )
    }
  }

}
