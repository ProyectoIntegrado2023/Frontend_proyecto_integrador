import { AccessService } from './../../core/services/access.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleView } from 'src/app/core/model/moduleView.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moduleView: ModuleView[] = []

  constructor( private router:Router, private accessService: AccessService){}

  ngOnInit(): void {
    this.accessService.getAll().subscribe(data => {
      this.moduleView = data;
    });
  }

  cerrarSesion(): void{
    this.router.navigate(['/log-in']);
  }
}
