import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acceso } from 'src/app/core/model/index.frontend';
import { AccessService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listAccesso: Acceso[] = []

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
navegar(acceso: Acceso){
  this.router.navigate([acceso.url]);
}

}
