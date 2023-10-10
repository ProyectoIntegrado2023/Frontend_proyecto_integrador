import { AccessService } from './../../../core/services/access.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleView } from 'src/app/core/model/moduleView.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  titulo: string = ''
  accesos: ModuleView[] = []

  constructor(private router: Router, private accessService: AccessService) {}

  ngOnInit(): void {
    const segments = this.router.url.split('/');
    const position = segments.findIndex(v => v == 'modulo');
    const numeroDeRuta = parseFloat(segments[position + 1]);
    
    this.accessService.getAll().subscribe(data => {
      this.titulo = data.find(v => v.id == numeroDeRuta)?.titulo ?? 'no existe';
      this.accesos = data.filter(v => v.id_acceso_padre == numeroDeRuta);
    });

  }

  navegar(acceso: ModuleView) {
    this.router.navigate([acceso.url]);
  }

}
