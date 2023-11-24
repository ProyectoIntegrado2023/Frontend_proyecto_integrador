import { Component, OnInit } from '@angular/core';
import { CursoArticuladoService, EscuelaService } from 'src/app/core/services/index.services.https';
import { CursoArticulado, Escuela } from 'src/app/core/model/index.frontend';
import { notificacionConfirmacionEliminar, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';

@Component({
  selector: 'app-mantener-curso-articulado',
  templateUrl: './mantener-curso-articulado.component.html',
  styleUrls: ['./mantener-curso-articulado.component.css']
})
export class MantenerCursoArticuladoComponent implements OnInit {
  listaCursoArticulado: CursoArticulado[] = [];
  listaEscuela: Escuela[] = [];
  escuela: Escuela = Escuela.init();
  cursoArticulado: CursoArticulado = CursoArticulado.init();

  constructor(
    private cursoArticuladoService: CursoArticuladoService,
    private escuelaService: EscuelaService,
  ){}

  ngOnInit(): void {
    this.cursoArticuladoService.getAll().subscribe(res => this.listaCursoArticulado = res);
    this.escuelaService.getAll().subscribe(res => this.listaEscuela = res);
  }

  public guardar(){
    if(this.escuela.id != 0){
      this.cursoArticulado.escuela = this.escuela;
    }
    if(this.cursoArticulado.id != 0){
      this.cursoArticuladoService.update(this.cursoArticulado).subscribe(
        (res) => {
          this.cursoArticulado = CursoArticulado.init();
          this.cursoArticuladoService.getAll().subscribe(res => this.listaCursoArticulado = res);
          notificacionSimpleDinamico('Actualizado', 'se actualizo el Curso Articulado exitosamente', 'success')
        },
        (err) => {
          notificacionSimpleDinamico('Error', 'No se pudo actualizar el Curso Articulado', 'error')
        }
      )
    } else {
      this.cursoArticuladoService.save(this.cursoArticulado).subscribe(
        (res) => {
          this.cursoArticulado = CursoArticulado.init();
          this.cursoArticuladoService.getAll().subscribe(res => this.listaCursoArticulado = res);
          notificacionSimpleDinamico('Agregado', 'se agrego el Curso Articulado exitosamente', 'success')
        })
    }
  }

  public cancelar(){
    if(this.cursoArticulado.id != 0){
      this.listaCursoArticulado.push(this.cursoArticulado);
    }
    this.cursoArticulado = CursoArticulado.init();
    this.escuela = Escuela.init();
  }

  public editar(obj: CursoArticulado){
    this.cursoArticulado = obj;
    this.escuela = obj.escuela ?? Escuela.init();
  }

  public eliminar(id: number){
    notificacionConfirmacionEliminar('¿Estas seguro de eliminar este Curso Articulado?', false, 'izar Curso Articulado', true, '')
    .then(res => {
        if(res) {
          this.cursoArticuladoService.delete(id).subscribe(
            (res) => {
              this.cursoArticuladoService.getAll().subscribe(res => this.listaCursoArticulado = res);
              notificacionSimpleDinamico('Eliminado', 'se elimino el Curso Articulado exitosamente', 'success')
            },
            (err) => {
              notificacionSimpleDinamico('Error', 'No se pudo eliminar el Curso Articulado', 'error')
            }
          )
        }
      }
    )
  }

}
