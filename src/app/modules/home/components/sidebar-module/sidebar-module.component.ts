import { Component, Input } from '@angular/core';
import { ModuleView } from 'src/app/core/model/moduleView.model';

@Component({
  selector: 'app-sidebar-module',
  templateUrl: './sidebar-module.component.html',
  styleUrls: ['./sidebar-module.component.css']
})
export class SidebarModuleComponent {
  @Input() access: ModuleView[] = []
}
