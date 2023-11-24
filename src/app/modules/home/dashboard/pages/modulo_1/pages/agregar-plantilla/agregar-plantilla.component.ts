import { Component, OnInit } from '@angular/core';

import { PlantillaService, TipoConvenioService } from 'src/app/core/services/index.services.https';
import { Plantilla } from 'src/app/core/model/index.frontend';
import { notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';
import { recopilarPlantilla } from 'src/app/core/function/localStorage/recopilarLocalStorage';
import { UpdateEffectPlantillaService } from 'src/app/core/services/index.services.status';

@Component({
  selector: 'app-agregar-plantilla',
  templateUrl: './agregar-plantilla.component.html',
  styleUrls: ['./agregar-plantilla.component.css']
})
export class AgregarPlantillaComponent implements OnInit {
  
  update: boolean = false;
  plantilla: Plantilla = Plantilla.init();

  constructor(
    private plantillaService: PlantillaService,
    private tipoConvenioService: TipoConvenioService,
    private _updateEffectPlantilla: UpdateEffectPlantillaService
  ){}

  ngOnInit(): void {
    this._updateEffectPlantilla.get().subscribe(result =>{
      this.update = result;
      this.iniciarPlantilla();
    })
  }

  private iniciarPlantilla(){
    if(this.update){
      this.plantilla = recopilarPlantilla('plantilla');
    } else {
      this.tipoConvenioService.getAll().subscribe(arrayConvenio => this.plantilla.tipo_convenio = arrayConvenio[0]) ;
      this.plantilla.url = '';
    }
  }

  public cancelar(){
    this.plantilla = Plantilla.init();
  }

  public enviarObjecto(){
    if(this.update){
      this.editarPlantilla(this.plantilla);
    } else {
      this.guardarPlantilla(this.plantilla);
    }
  }

  private editarPlantilla(plantilla: Plantilla){
    this.plantillaService.update(plantilla).subscribe(
      (res) => {
        notificacionSimpleDinamico('¡Actualizado!', 'se actualizo corectamente', 'success');
      },
      (error) => {
        notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error');
      }
    );
  }
  private guardarPlantilla(plantilla: Plantilla){
    this.plantillaService.save(plantilla).subscribe(
      (res) => {
        notificacionSimpleDinamico('¡Guardado!', 'Se guardo correctamente', 'success');
      },
      (error) => {
        notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error');
      }
    );
  }

  public onFileUrlsEmitted(fileUrls: string[]) {
    console.log(fileUrls);
  }
}
