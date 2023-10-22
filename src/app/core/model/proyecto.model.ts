import { Semestre } from './semestre.model';
import { Actividades } from './actividad.model';

export interface Proyecto {
    ID_PROYECTO: number;
    NOMBRE: string;
    CODIGO: string;
    COORDINADOR: string;
    FECHA_INICIO: Date;
    FECHA_FIN: Date;
    LUGAR: string;
    OBJETIVOS: string;
    DESCRIPCION: string;
    PRESUPUESTO: number;
    INFORME_FINAL: string;
    ID_TIPO_CONVENIO: number;
    semestre: Semestre;
    ID_ESTADO: number;
    ID_CICLO: number;
    ID_ESCUELA: number;
    ID_CURSO_ARTICULADO: number;
    actividades: Actividades[];
}  