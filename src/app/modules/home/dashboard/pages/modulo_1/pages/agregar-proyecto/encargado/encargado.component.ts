import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { notificacionConfirmacionEliminar, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';
import { obtenerIdsAEliminar } from 'src/app/core/function/generacion/obtenerIdsEliminados';
import { recopilarProyecto } from 'src/app/core/function/localStorage/recopilarLocalStorage';
import { Escuela, Facultad, Participante, RolSistema } from 'src/app/core/model/index.frontend';
import { EscuelaService, ParticipanteService, RolSistemaService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  listaParticipante: Participante[] = []
  listaParticipanteCopia: Participante[] = []
  rolSistema: RolSistema = RolSistema.init();

  constructor(
    private participanteService: ParticipanteService,
    private escuelaService: EscuelaService,
    private rolSistemaService: RolSistemaService,
  ) {}

  ngOnInit(): void {
    this.participanteService.getAll().subscribe(data => {
      this.listaParticipante = data.filter(p => p.proyecto?.id == recopilarProyecto().id);
      this.listarEscuela();
    });
    this.rolSistemaService.getAll().subscribe(roles => {
      this.rolSistema = roles[0];
    });
  }
  
  private listarEscuela() {
    this.escuelaService.getAll().subscribe(data => {
      this.actualizarFacultad(data);
    })
  }

  private actualizarFacultad(arrayEscuela: Escuela[]) {
    this.listaParticipante.forEach(participante => {
      if(participante.estudiante != null && participante.docente == null && 
        participante.estudiante.ciclo != null && participante.estudiante.ciclo.escuela != null) {
        participante.estudiante.ciclo.escuela.facultad = arrayEscuela.find(e => e.id === participante.estudiante?.ciclo?.escuela?.id) ?? Facultad.init();
      }
    });
    this.listaParticipanteCopia = this.listaParticipante;
  }

  public agregarEncargado(id: number){
    this.listaParticipante.map(p => {
      if(p.id == id) {
        const yaCuenta: boolean = p.rol_sistema?.id == this.rolSistema.id;
        if(yaCuenta) {
          p.rol_sistema = null;
        } else {
          p.rol_sistema = this.rolSistema;
        }
      }
    })    
  }

  public enviarObjecto() {
    const observables = this.listaParticipante.map(p => {
      return this.participanteService.update(p);
    })
    forkJoin(observables).subscribe(
      (resultados) => {
        // console.log(resultados);
        this.listaParticipante = resultados;
        this.listaParticipanteCopia = resultados;
        notificacionSimpleDinamico('¡Guardado!', 'Se guardo todo correctamente', 'success');
      },
      (error) => {
        notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error');
      }
    );
  }

}
