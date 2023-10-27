import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../horas-detalles/interface/Table.interface';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent implements OnInit {
  
  col: any[] = []
  
  constructor() {}

  ngOnInit(): void {
    const estudiante = JSON.parse(localStorage.getItem('estudiante')!);
  }

  @Input() selectedRow: Column | null = null;
}
