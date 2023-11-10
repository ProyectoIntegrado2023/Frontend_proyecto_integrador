import { Component, OnInit } from '@angular/core';
import { Escuela, Facultad, Participante } from 'src/app/core/model/index.frontend';
import { EscuelaService, ParticipanteService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  listaParticipante: Participante[] = []

  constructor(
    private participanteService: ParticipanteService,
    private escuelaService: EscuelaService
  ) {}

  ngOnInit(): void {
    this.participanteService.getAll().subscribe(data => {
      this.listaParticipante = data;
      this.listarEscuela();
    });
  }
  
  private listarEscuela() {
    this.escuelaService.getAll().subscribe(data => {
      this.actualizarFacultad(data);
    })
  }

  private actualizarFacultad(arrayEscuela: Escuela[]) {
    this.listaParticipante.forEach(participante => {
      participante.estudiante.ciclo.escuela.facultad = arrayEscuela.find(e => e.id === participante.estudiante.ciclo.escuela.id) ?? Facultad.init();
    });
  }

}
