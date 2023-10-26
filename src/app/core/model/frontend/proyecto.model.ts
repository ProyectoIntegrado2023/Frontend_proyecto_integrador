import { Semestre } from './semestre.model';
import { Actividad } from './actividad.model';
import { Recurso } from './recurso.model';
import { Participante } from './participante.model';
import { RolProyecto } from './rolProyecto.model';
import { Ciclo } from './ciclo.model';
import { Escuela } from './escuela.model';
import { TipoConvenio } from './tipoConvenio.model';
import { Estado } from './estado.model';

export class Proyecto {
    actividades           : Actividad[]             = [];
    recurso               : Recurso[]               = [];
    participante          : Participante[]          = [];
    rol_proyecto          : RolProyecto[]           = [];
    curso_articulado      : any                     = null;
    tipo_convenio         : TipoConvenio            = new TipoConvenio();
    estado                : Estado                  = new Estado();
    ciclo                 : Ciclo                   = new Ciclo();
    escuela               : Escuela                 = new Escuela();
    nombre                : string                  = '';
    codigo                : string                  = '';
    coordinador           : string                  = '';
    lugar                 : string                  = '';
    fecha_inicio          : string                  = '';
    presupuesto           : number                  = 0;
    semestre              : Semestre                = new Semestre();
    fecha_fin             : string                  = '';
    descripcion           : string                  = '';
    objetivos             : string                  = '';
    informe_final         : string                  = '';
    id                    : number | null           = null;
  }