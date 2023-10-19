import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { constGlobal } from '../../core/global/const-global';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  formulario: FormGroup = new FormGroup({});
  titulo: string = constGlobal.NOMBRE_PAGINA_WEB;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    
    this.formulario = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });

  }

  onSumit(): void{
    if (this.formulario.valid) {
      this.router.navigate(['/home']);
    }
  }

}
