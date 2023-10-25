import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/core/model/frontend/persona.model';
import { PersonaService } from 'src/app/core/services/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {

  private subscriptionPersona!: Subscription
  persona: Persona = new Persona();
  constructor(
    private router: Router,
    private personaService: PersonaService,
  ){}
    
  ngOnInit(): void {
    const id: number = parseInt(localStorage.getItem('usuario_id')!);
    this.subscriptionPersona = this.personaService.getById(id).subscribe(data => {
      this.persona = data;
    })
  }

  ngOnDestroy(): void {
    if (this.subscriptionPersona) {
      this.subscriptionPersona.unsubscribe();
    }
  }

  public cerrarSesion(): void{
    this.router.navigate(['/log-in']);
  }
}
