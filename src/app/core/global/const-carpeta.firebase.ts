export class CarpetaFirebase {
    private readonly PROYECTO        = 'proyecto';
    private readonly PERFIL          = 'perfil';
    private readonly ACTIVIDAD       = 'actividad';
    private readonly RECURSO         = 'recurso';
    private readonly INFORME         = 'informe';
    
    public guardarActividad(idProyecto: number){
        return this.PROYECTO + '/' + idProyecto + '/' + this.ACTIVIDAD
    }

    public guardarRecurso(idProyecto: number){
        return this.PROYECTO + '/' + idProyecto + '/' + this.RECURSO
    }

    public guardarInforme(idProyecto: number){
        return this.PROYECTO + '/' + idProyecto + '/' + this.INFORME
    }
}