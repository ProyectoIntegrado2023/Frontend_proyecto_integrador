import { SemestreModel } from './semestre.model';
import { ActividadModel } from './actividad.model';
import { RecursoModel } from './recurso.model';
import { ParticipanteModel } from './participante.model';
import { RolProyectoModel } from './rolProyecto.model';
import { CicloModel } from './ciclo.model';
import { EscuelaModel } from './escuela.model';
import { TipoConvenioModel } from './tipoConvenio.model';
import { EstadoModel } from './estado.model';

export class ProyectoModel {
    actividades:          ActividadModel[]            = [];
    recurso:              RecursoModel[]              = [];
    participante:         ParticipanteModel[]         = [];
    rol_proyecto:         RolProyectoModel[]          = [];
    id_curso_articulado:  any                         = null;
    id_tipo_de_convenio:  TipoConvenioModel           = new TipoConvenioModel();
    id_estado:            EstadoModel                 = new EstadoModel();
    id_ciclo:             CicloModel                  = new CicloModel();
    id_escuela:           EscuelaModel                = new EscuelaModel();
    nombre:               string                      = '';
    codigo:               string                      = '';
    coordinador:          string                      = '';
    lugar:                string                      = '';
    fecha_inicio:         string                      = '';
    presupuesto:          number                      = 0;
    id_semestre:          SemestreModel               = new SemestreModel();
    fecha_fin:            string                      = '';
    descripcion:          string                      = '';
    objetivos:            string                      = '';
    informe_final:        string                      = '';
    id_proyecto:          number | null               = null;
  }