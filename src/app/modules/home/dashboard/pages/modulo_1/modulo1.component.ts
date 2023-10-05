import { PlantillaService } from './../../../../../core/services/plantilla.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Plantilla } from 'src/app/core/model/plantilla.model';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: ['./modulo1.component.css']
})
export class Modulo1Component implements OnInit {
  
  plantillaLista: Plantilla[] = [];
  plantilla: Plantilla = new Plantilla;
  selectAll: boolean = false;
  loading: boolean = false;
  totalRecords: number = 0;
  value: Plantilla = new Plantilla;
  representatives: Plantilla[] = [];

  constructor(private plantillaService: PlantillaService){}

  ngOnInit(): void {
      this.plantillaService.getAll().subscribe(data => {
        this.plantillaLista = data;
        this.totalRecords = data.length;
      });
  }

  loadPlantilla(event: any){}

  onSelectionChange(event: any){}

  onSelectAllChange(event: any){}
}
