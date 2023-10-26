import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rol-negocio',
    pathMatch: 'full'
  },
  {
    path: 'rol-negocio',
    loadChildren: () => import('./pages/mantener-rol-negocio/mantener-rol-negocio.module').then(m => m.MantenerRolNegocioModule)
  },
  {
    path: 'ciclo',
    loadChildren: () => import('./pages/mantener-ciclo/mantener-ciclo.module').then(m => m.MantenerCicloModule)
  },
  {
    path: 'estado',
    loadChildren: () => import('./pages/mantener-estado/mantener-estado.module').then(m => m.MantenerEstadoModule)
  },
  {
    path: 'semestre',
    loadChildren: () => import('./pages/mantener-semestre/mantener-semestre.module').then(m => m.MantenerSemestreModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/mantener-docente/mantener-docente.module').then(m => m.MantenerDocenteModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/mantener-usuario/mantener-usuario.module').then(m => m.MantenerUsuarioModule)
  },
  {
    path: 'curso-articulado',
    loadChildren: () => import('./pages/mantener-curso-articulado/mantener-curso-articulado.module').then(m => m.MantenerCursoArticuladoModule)
  },
  {
    path: 'tipo-convenio',
    loadChildren: () => import('./pages/mantener-tipo-convenio/mantener-tipo-convenio.module').then(m => m.MantenerTipoConvenioModule)
  },
  {
    path: 'escuela',
    loadChildren: () => import('./pages/mantener-escuela/mantener-escuela.module').then(m => m.MantenerEscuelaModule)
  },
  {
    path: 'facultad',
    loadChildren: () => import('./pages/mantener-facultad/mantener-facultad.module').then(m => m.MantenerFacultadModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo5RoutingModule { }
