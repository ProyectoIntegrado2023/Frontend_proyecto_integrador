import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlantillaService } from 'src/app/core/index.services';
import { Plantilla } from 'src/app/core/model/index.frontend';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  lista_plantilla: Plantilla[] = []

  constructor(
    private router: Router,
    private plantillaService: PlantillaService
    ){}

  ngOnInit(): void {
    this.plantillaService.getAll().subscribe(d => this.lista_plantilla = d);
  }

  public editarPlantilla(plt: Plantilla){
    localStorage.setItem('plantilla', JSON.stringify(plt));
    this.router.navigate(['/home/modulo/1/plantilla/editar']);
  }
}
