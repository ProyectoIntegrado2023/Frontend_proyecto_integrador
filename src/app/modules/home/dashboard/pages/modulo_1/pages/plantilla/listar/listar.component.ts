import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlantillaService } from 'src/app/core/services/index.services.https';
import { UpdateEffectPlantillaService } from 'src/app/core/services/index.services.status';
import { Plantilla } from 'src/app/core/model/index.frontend';
import { notificacionPromesa, notificacionSimple } from 'src/app/core/function/SweetAlert/alertDinamic';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  lista_plantilla: Plantilla[] = []

  constructor(
    private router: Router,
    private plantillaService: PlantillaService,
    private _updateEffectPlantilla: UpdateEffectPlantillaService
  ){}

  ngOnInit(): void {
    this.plantillaService.getAll().subscribe(d => this.lista_plantilla = d);
  }

  public editarPlantilla(plt: Plantilla){
    this._updateEffectPlantilla.emit(true);
    localStorage.setItem('plantilla', JSON.stringify(plt));
    this.router.navigate(['/home/modulo/1/plantilla/editar']);
  }

  public eliminarPlantilla(id: number){
    notificacionPromesa('¿Desea eliminar la plantilla?', 'Si, eliminar', true, 'No, cancelar', true).then((result) => {
      if (result) {
        this.eliminar(id);
      }
    })
  }

  private eliminar(id: number){
    this.plantillaService.delete(id).subscribe(
      (res) => {
        this.lista_plantilla = this.lista_plantilla.filter(plt => plt.id != id);
        notificacionSimple('¡Eliminado!', 'Se elimino correctamente', 'success');
      },
      (error) => {
        notificacionSimple('Error', 'Ocurrio un error', 'error');
      }
    );
  }
}
