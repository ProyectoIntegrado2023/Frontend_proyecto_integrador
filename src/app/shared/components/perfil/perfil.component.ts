import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/core/model/index.frontend';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  persona: Persona = Persona.init();
  constructor(
    private router: Router,
  ){}
    
  ngOnInit(): void {
    this.persona = JSON.parse(localStorage.getItem('persona')!)
  }

  public cerrarSesion(): void{
    this.router.navigate(['/log-in']);
  }
}
