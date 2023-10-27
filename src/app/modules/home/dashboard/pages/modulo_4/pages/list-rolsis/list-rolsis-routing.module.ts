import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolsisComponent } from './list-rolsis.component';

const routes: Routes = [
  {
    path: '',
    component: ListRolsisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRolsisRoutingModule { }
