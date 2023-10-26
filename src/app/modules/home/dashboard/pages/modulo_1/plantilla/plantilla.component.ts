import { PlantillaService } from './../../../../../../core/services/plantilla.service';
import { Component, OnInit } from '@angular/core';
import { Plantilla } from 'src/app/core/model/frontend/plantilla.model';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  
  lista_plantilla: Plantilla[] = []

  constructor(private plantillaService: PlantillaService){}

  ngOnInit(): void {
    this.plantillaService.getAll().subscribe(d => this.lista_plantilla = d);
  }
  
}
