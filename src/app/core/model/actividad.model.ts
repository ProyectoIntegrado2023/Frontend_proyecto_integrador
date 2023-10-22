import { Proyecto } from './proyecto.model';

export interface Actividades {
    ID_ACTIVIDAD: number;
    NOMBRE: string;
    FECHA: Date;
    proyecto: Proyecto;
  }
  