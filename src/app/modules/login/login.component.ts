import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NOMBRE_PAGINA_WEB } from '../../core/global/const-global';
import { Usuario } from 'src/app/core/model/index.frontend';
import { UsuarioService } from 'src/app/core/index.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  formulario: FormGroup = new FormGroup({});
  titulo: string = NOMBRE_PAGINA_WEB;
  usuarios: Usuario[] = []
  loginError: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('usuario_id');

    this.usuarioService.getAll().subscribe(data => {
      this.usuarios = data
    })

    this.formulario = this.fb.group({
      usuario: ['', [Validators.required]], // Validators.email
      contrasena: ['', Validators.required]
    });

  }

  onSumit(): void{
    const { value } = this.formulario;
    const loginValid: boolean = this.usuarios.some(v => v.username === value.usuario && v.password === value.contrasena)
    const usuario: Usuario = this.usuarios.find(v => v.username === value.usuario && v.password === value.contrasena)!;

    if (loginValid) {
      usuario.id != null ? localStorage.setItem('usuario_id', usuario.id.toString()) : null
      this.router.navigate(['/home']);
    } else {
      this.loginError = true
    }
  }

}
