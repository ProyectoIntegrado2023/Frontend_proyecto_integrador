import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';
import { deactivateProyectoGuard } from 'src/app/core/guards/deactivate-proyecto.guard';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    canDeactivate: [deactivateProyectoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
