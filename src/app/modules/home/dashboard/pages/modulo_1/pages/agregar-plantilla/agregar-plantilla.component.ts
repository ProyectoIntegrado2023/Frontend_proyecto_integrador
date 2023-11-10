import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantillaService, TipoConvenioService } from 'src/app/core/services/index.services.https';
import { Plantilla } from 'src/app/core/model/index.frontend';
import { carpetaPlantilla } from 'src/app/core/global/const-carpeta.firebase';
import { notificacionCon_titulo_cuerpo_icono } from 'src/app/core/function/SweetAlertDeterminado';

@Component({
  selector: 'app-agregar-plantilla',
  templateUrl: './agregar-plantilla.component.html',
  styleUrls: ['./agregar-plantilla.component.css']
})
export class AgregarPlantillaComponent implements OnInit {
  urlGuardar: string = '/home/modulo/1/agregar-plantilla';
  carpetaFire: string = carpetaPlantilla;

  plantilla: Plantilla = Plantilla.init();

  constructor(
    private router: Router,
    private plantillaService: PlantillaService,
    private tipoConvenioService: TipoConvenioService
  ){}

  ngOnInit(): void {
    if(this.urlGuardar == this.router.url){
      this.tipoConvenioService.getAll().subscribe(data => {
        this.plantilla.tipo_convenio = data[0];
      }) 
      this.plantilla.url = '';
    } else {
      this.plantilla = localStorage.getItem('plantilla') ? JSON.parse(localStorage.getItem('plantilla')!) : Plantilla.init();
    }
  }

  cancelar(){
    this.plantilla = Plantilla.init();
  }

  public enviarObjecto(){
    if(this.urlGuardar == this.router.url){
      this.guardarPlantilla(this.plantilla);
    } else {
      this.editarPlantilla(this.plantilla);
    }
  }

  private editarPlantilla(plantilla: Plantilla){
    this.plantillaService.update(plantilla).subscribe(
      (res) => {
        notificacionCon_titulo_cuerpo_icono('¡Actualizado!', 'se actualizo corectamente', 'success');
      },
      (error) => {
        notificacionCon_titulo_cuerpo_icono('Error', 'Ocurrio un error', 'error');
      }
    );
  }
  private guardarPlantilla(plantilla: Plantilla){
    this.plantillaService.save(plantilla).subscribe(
      (res) => {
        notificacionCon_titulo_cuerpo_icono('¡Guardado!', 'Se guardo correctamente', 'success');
      },
      (error) => {
        notificacionCon_titulo_cuerpo_icono('Error', 'Ocurrio un error', 'error');
      }
    );
  }

  public onFileUrlsEmitted(fileUrls: string[]) {
    console.log(fileUrls);
  }


}
