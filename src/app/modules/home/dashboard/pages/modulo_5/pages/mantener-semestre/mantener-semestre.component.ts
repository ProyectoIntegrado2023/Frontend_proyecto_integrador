import { Component, OnInit } from '@angular/core';
import { Semestre } from 'src/app/core/model/index.frontend';
import { SemestreService } from 'src/app/core/services/index.services.https';
import { notificacionPromesa, notificacionSimple } from 'src/app/core/function/SweetAlert/alertDinamic';

@Component({
  selector: 'app-mantener-semestre',
  templateUrl: './mantener-semestre.component.html',
  styleUrls: ['./mantener-semestre.component.css']
})
export class MantenerSemestreComponent implements OnInit {
  listaSemestre: Semestre[] = [];
  semestre: Semestre = Semestre.init();

  constructor(
    private semestreService: SemestreService,
  ){}

  ngOnInit(): void {
    this.semestreService.getAll().subscribe(semestres => {
      this.listaSemestre = semestres
    })
  }

  public editar(obj: Semestre){
    this.semestre = obj;
    this.listaSemestre = this.listaSemestre.filter(semestre => semestre.id != obj.id);
  }

  public cancelar(){
    if(this.semestre.id != 0) {
      this.listaSemestre.push(this.semestre);
    }
    this.semestre = Semestre.init();
  }

  public guardar(){
    if(this.semestre.id != 0){
      this.semestreService.update(this.semestre).subscribe(
        (res) => {
          this.semestre = Semestre.init();
          this.listaSemestre.push(res);
          notificacionSimple('Actualizado', 'se actualizo el semestre exitosamente', 'success');
        },
        (err) => {
          notificacionSimple('Error', 'No se pudo actualizar el semestre', 'error');
        }
      );
    } else {
      this.semestreService.save(this.semestre).subscribe(
        (res) => {
          this.semestre = Semestre.init();
          this.listaSemestre.push(res);
          notificacionSimple('Agregado', 'se agrego el semestre exitosamente', 'success');
        },
        (err) => {
          notificacionSimple('Error', 'No se pudo agregar el semestre', 'error');
        }
      )
    }
  }

  public eliminar(id: number){
    notificacionPromesa('¿Estas seguro de eliminar este semestre?', 'Eliminar semestre', false, '', true)
    .then(res => {
      if(res) {
        this.semestreService.delete(id).subscribe(
          (res) => {
            this.semestre = Semestre.init();
            this.listaSemestre = this.listaSemestre.filter(semestre => semestre.id != id);
            notificacionSimple('Eliminado', 'se elimino el semestre exitosamente', 'success');
          },
          (err) => {
            notificacionSimple('Error', 'No se pudo eliminar el semestre', 'error');
          }
        )
      }
    })
  }

}
