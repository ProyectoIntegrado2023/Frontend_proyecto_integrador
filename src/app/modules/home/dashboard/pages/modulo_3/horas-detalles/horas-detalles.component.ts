import { Component, Input, OnInit } from '@angular/core';
import { Column } from './interface/Table.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'horas-detalles',
  templateUrl: './horas-detalles.component.html',
  styleUrls: ['./horas-detalles.component.css'],
})
export class HorasDetallesComponent implements OnInit {

  selected1 = 'FACULTAD';
  selected2 = 'ESCUELA';
  selected3 = 'CICLO';

  @Input()
  public col: Column[] = [
    {
      codigo: '202100163',
      name: 'Esau Morales Guillen',
      facultad: 'FIA',
      escuela: 'Ingenieria de Sistemas',
      ciclo: 'IV',
      horas: 40
    },
    {
      codigo: '202100164',
      name: 'josue Pedraza',
      facultad: 'FIA',
      escuela: 'Ingenieria de Sistemas',
      ciclo: 'IV',
      horas: 10
    }
  ];
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('estudiante');
  }
  @Input() public column: Column[] = [];
  public selectedRow: Column | null = null; // Inicializa como nulo

  // Define la función selectRow para asignar la fila seleccionada
  public selectRow(row: Column) {
    this.selectedRow = row;
    localStorage.setItem('estudiante', JSON.stringify(row));
    this.router.navigate(['/home/modulo/3/horas']);
  }


}
