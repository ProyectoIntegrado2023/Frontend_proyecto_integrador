import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantillaService, TipoConvenioService } from 'src/app/core/index.services';
import { Plantilla } from 'src/app/core/model/index.frontend';
import { carpetaPlantilla } from 'src/app/core/global/const-carpeta.firebase';

@Component({
  selector: 'app-agregar-plantilla',
  templateUrl: './agregar-plantilla.component.html',
  styleUrls: ['./agregar-plantilla.component.css']
})
export class AgregarPlantillaComponent implements OnInit {
  urlGuardar: string = '/home/modulo/1/agregar-plantilla';
  carpetaFire: string = carpetaPlantilla;

  mensaje: string = '';
  satisfaccion: boolean = false;
  confirmarEnvioHttp: boolean = false;

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
        this.enviado('Se edito correctamente', true);
      },
      (error) => {
        this.enviado('Ocurrio un error', false);
      }
    );
  }
  private guardarPlantilla(plantilla: Plantilla){
    this.plantillaService.save(plantilla).subscribe(
      (res) => {
        this.enviado('Se guardo correctamente', true);
      },
      (error) => {
        this.enviado('Ocurrio un error', false);
      }
    );
  }

  public onFileUrlsEmitted(fileUrls: string[]) {
    console.log(fileUrls);
  }

  public enviado(msj: string, stf: boolean){
    this.mensaje = msj;
    this.satisfaccion = stf;
    this.confirmarEnvioHttp = true;
  }

}
