import Swal, { SweetAlertIcon } from 'sweetalert2';

export function notificacionSimpleDinamico(titulo: string, cuerpo: string, icono: SweetAlertIcon) {
    Swal.fire({
        title: titulo,
        text: cuerpo,
        icon: icono
    });
}

export function notificacionConfirmacionEliminar(titulo: string, btnDenyShow: boolean, textbtnConfirm: string,
  btnCancelShow: boolean, textbtnDeny: string): Promise<boolean> {
    
    return new Promise((resolve) => {
      Swal.fire({
        title: titulo,
        showDenyButton: btnDenyShow,
        showCancelButton: btnCancelShow,
        confirmButtonText: textbtnConfirm,
        denyButtonText: textbtnDeny,
      }).then( (result) => resolve(result.isConfirmed) );
    });
}

export function notificacionConfirmacionLimpieza(): Promise<boolean> {
  return new Promise((resolve) => {
    Swal.fire({
      title: '¿Estás seguro que quieres limpiar tu avanze?',
      showCancelButton: true,
      confirmButtonText: 'Si, limpiar',
    }).then( (result) => resolve(result.isConfirmed) );
  });
}