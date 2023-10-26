import { SemestreEntity } from './semestre.model';
import { CicloEntity } from './ciclo.model';
import { EscuelaEntity } from './escuela.model';
import { TipoConvenioEntity } from './tipoConvenio.model';
import { EstadoEntity } from './estado.model';

export class ProyectoEntity {
    id_CURSO_ARTICULADO:  any                         = null;
    id_TIPO_DE_CONVENIO:  TipoConvenioEntity           = new TipoConvenioEntity();
    id_ESTADO:            EstadoEntity                 = new EstadoEntity();
    id_CICLO:             CicloEntity                  = new CicloEntity();
    id_ESCUELA:           EscuelaEntity                = new EscuelaEntity();
    nombre:               string                      = '';
    codigo:               string                      = '';
    coordinador:          string                      = '';
    lugar:                string                      = '';
    fecha_INICIO:         string                      = '';
    presupuesto:          number                      = 0;
    id_SEMESTRE:          SemestreEntity               = new SemestreEntity();
    fecha_FIN:            string                      = '';
    descripcion:          string                      = '';
    objetivos:            string                      = '';
    informe_FINAL:        string                      = '';
    id_PROYECTO:          number | null               = null;
  }