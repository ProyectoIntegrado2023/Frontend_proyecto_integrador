import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent {

  @Input() mensaje: string = ''
  @Input() satisfaccion: boolean = false;
  @Input() confirmarEnvioHttp: boolean = false;

  public cerrarConfirmacion() {
    this.confirmarEnvioHttp = false
    this.satisfaccion = false
    this.mensaje = ''
  }
}
