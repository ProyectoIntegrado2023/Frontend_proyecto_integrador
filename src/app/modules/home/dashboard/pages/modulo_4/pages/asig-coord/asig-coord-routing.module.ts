import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsigCoordComponent } from './asig-coord.component';

const routes: Routes = [
  {
    path: '',
    component: AsigCoordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsigCoordRoutingModule { }
