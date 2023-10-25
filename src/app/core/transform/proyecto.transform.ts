import { ProyectoEntity } from './../model/database/proyecto.model';
import { ProyectoModel } from '../model/backend/proyecto.model';
import { Proyecto } from '../model/frontend/proyecto.model';
import { ActividadFiltrarParaBackend, ActividadFiltrarParaFrontend } from './actividad.transform';
import { ParticipanteFiltrarParaBackend, ParticipanteFiltrarParaFrontend } from './participante.transform';
import { RecursoFiltrarParaBackend, RecursoFiltrarParaFrontend } from './recurso.transform';
import { SemestreFiltrarParaBackend, SemestreFiltrarParaFrontend } from './semestre.transform';
import { TipoConvenioFiltrarParaBackend, TipoConvenioFiltrarParaFrontend } from './tipoConvenio.transform';
import { CicloFiltrarParaBackend, CicloFiltrarParaFrontend } from './ciclo.transform';
import { EscuelaFiltrarParaBackend, EscuelaFiltrarParaFrontend } from './escuela.transform';
import { EstadoFiltrarParaBackend, EstadoFiltrarParaFrontend } from './estado.transform';
import { TipoConvenio } from '../model/frontend/tipoConvenio.model';
import { Ciclo } from '../model/frontend/ciclo.model';
import { Estado } from '../model/frontend/estado.model';
import { Escuela } from '../model/frontend/escuela.model';
import { SemestreModel } from '../model/backend/semestre.model';
import { TipoConvenioModel } from '../model/backend/tipoConvenio.model';
import { EstadoModel } from '../model/backend/estado.model';
import { CicloModel } from '../model/backend/ciclo.model';
import { EscuelaModel } from '../model/backend/escuela.model';

export function ProyectoFiltrarParaFrontend(proyectoModel: ProyectoModel): Proyecto {
    
    return proyectoModel != null ? {
        id                      : proyectoModel.id_proyecto,
        nombre                  : proyectoModel.nombre,
        codigo                  : proyectoModel.codigo,
        coordinador             : proyectoModel.coordinador,
        lugar                   : proyectoModel.lugar,
        fecha_inicio            : proyectoModel.fecha_inicio,
        presupuesto             : proyectoModel.presupuesto,
        semestre                : SemestreFiltrarParaFrontend(proyectoModel.id_semestre),
        fecha_fin               : proyectoModel.fecha_fin,
        descripcion             : proyectoModel.descripcion,
        objetivos               : proyectoModel.objetivos,
        informe_final           : proyectoModel.informe_final,
        actividades             : proyectoModel.actividades != null ? proyectoModel.actividades.map(a => ActividadFiltrarParaFrontend(a)) : [],
        recurso                 : proyectoModel.recurso != null ? proyectoModel.recurso.map(r => RecursoFiltrarParaFrontend(r)) : [],
        participante            : proyectoModel.participante != null ? proyectoModel.participante.map(p => ParticipanteFiltrarParaFrontend(p)) : [],
        rol_proyecto            : proyectoModel.rol_proyecto,
        curso_articulado        : proyectoModel.id_curso_articulado,
        tipo_convenio           : TipoConvenioFiltrarParaFrontend(proyectoModel.id_tipo_de_convenio),
        ciclo                   : CicloFiltrarParaFrontend(proyectoModel.id_ciclo),
        estado                  : EstadoFiltrarParaFrontend(proyectoModel.id_estado),
        escuela                 : EscuelaFiltrarParaFrontend(proyectoModel.id_escuela)
    } : new Proyecto()
}

export function ProyectoFiltrarParaBackend(proyecto: Proyecto): ProyectoEntity {
    return proyecto != null ? {
        id_PROYECTO             : proyecto.id,
        nombre                  : proyecto.nombre,
        codigo                  : proyecto.codigo,
        coordinador             : proyecto.coordinador,
        lugar                   : proyecto.lugar,
        fecha_INICIO            : proyecto.fecha_inicio,
        presupuesto             : proyecto.presupuesto,
        id_SEMESTRE             : SemestreFiltrarParaBackend(proyecto.semestre) ?? new SemestreModel(),
        fecha_FIN               : proyecto.fecha_fin,
        descripcion             : proyecto.descripcion,
        objetivos               : proyecto.objetivos,
        informe_FINAL           : proyecto.informe_final,
        id_CURSO_ARTICULADO     : proyecto.curso_articulado,
        id_TIPO_DE_CONVENIO     : TipoConvenioFiltrarParaBackend(proyecto.tipo_convenio) ?? new TipoConvenioModel(),
        id_ESTADO               : EstadoFiltrarParaBackend(proyecto.estado) ?? new EstadoModel(),
        id_CICLO                : CicloFiltrarParaBackend(proyecto.ciclo) ?? new CicloModel(),
        id_ESCUELA              : EscuelaFiltrarParaBackend(proyecto.escuela) ?? new EscuelaModel(),
        
    } : new ProyectoEntity()
}