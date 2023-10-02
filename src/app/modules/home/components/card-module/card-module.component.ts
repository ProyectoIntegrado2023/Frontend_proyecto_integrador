import { Component, Input, OnInit } from '@angular/core';
import { ModuleView } from 'src/app/core/model/moduleView.model';

@Component({
  selector: 'app-card-module',
  templateUrl: './card-module.component.html',
  styleUrls: ['./card-module.component.css']
})
export class CardModuleComponent {
  
  @Input() moduleView: ModuleView = new ModuleView()

}
