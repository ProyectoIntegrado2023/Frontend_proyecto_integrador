import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleView } from 'src/app/core/model/moduleView.model';
import { AccessService } from 'src/app/core/services/access.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listAccesso: ModuleView[] = []

  constructor(private accessService: AccessService,
              private router: Router) {}

  ngOnInit(): void {
      const fullUrl = this.router.url.split('/');
      const requiredPartOfUrl =fullUrl.slice(0, fullUrl.indexOf('lista-proyecto') + 1 );
      const currentUrl = requiredPartOfUrl.join('/');

      this.accessService.getAll().subscribe(data => {
        const idPadre = data.find(v => '/' + v.url==currentUrl)?.id;
        this.listAccesso = data.filter(v=> v.id_acceso_padre == idPadre);
      });
  }
navegar(acceso: ModuleView){
  this.router.navigate([acceso.url]);
}

}
