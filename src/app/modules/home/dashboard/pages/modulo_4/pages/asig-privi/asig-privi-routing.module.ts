import { RouterModule, Routes } from "@angular/router";
import { AsigPriviComponent } from "./asig-privi.component";
import { PriviDespleComponent } from "./list-privi/privi-desple/privi-desple.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
      path: '',
      component: AsigPriviComponent, 
      children: [
        { path: 'seleccionar-privilegios', component: PriviDespleComponent}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
   
  })
  export class  AsigPriviRoutingModule{ }
  