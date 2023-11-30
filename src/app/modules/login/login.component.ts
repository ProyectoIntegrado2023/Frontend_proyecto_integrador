import { AuthService } from './../../core/services/https/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NOMBRE_PAGINA_WEB } from '../../core/global/const-global';
import { Usuario } from 'src/app/core/model/index.frontend';
import { UsuarioService } from 'src/app/core/services/index.services.https';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  formulario: FormGroup = new FormGroup({});
  titulo: string = NOMBRE_PAGINA_WEB;
  loginError: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authSrv: AuthService,
    private usuarioSrv: UsuarioService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('persona');

    this.formulario = this.fb.group({
      username: ['', [Validators.required]], // Validators.email
      password: ['', Validators.required]
    });

  }

  onSumit(): void{
    const { value } = this.formulario;
    
    this.authSrv.login(value.username, value.password).subscribe(
      loginValid =>{
        if (loginValid) {
          this.usuarioSrv.getAll().subscribe(usuarios =>{
            const usuario: Usuario = usuarios.find(v => v.username === value.username)!;
            localStorage.setItem('persona', JSON.stringify(usuario.persona));
            this.router.navigate(['/home']);
          })
        } else {
          this.loginError = true
        }
      },
      err => {
        this.loginError = true
      }
    )
  }

}
