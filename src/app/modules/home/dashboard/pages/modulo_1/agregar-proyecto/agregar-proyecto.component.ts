import { ModuleView } from 'src/app/core/model/moduleView.model';
import { AccessService } from './../../../../../../core/services/access.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  listAccesso: ModuleView[] = []

  constructor(private accessService: AccessService, 
              private router: Router){}

  ngOnInit(): void {
    const fullUrl = this.router.url.split('/');
    const requiredPartOfUrl = fullUrl.slice(0, fullUrl.indexOf('agregar-proyecto/'));
    const currentUrl = requiredPartOfUrl.join('/');
    
    this.accessService.getAll().subscribe(data => {
      const idPadre = data.find(v => '/' + v.url == currentUrl)?.id;
      this.listAccesso = data.filter(v => v.id_acceso_padre == idPadre);
    });

  }

  navegar(acceso: ModuleView){
    this.router.navigate([acceso.url]);
  }
}
