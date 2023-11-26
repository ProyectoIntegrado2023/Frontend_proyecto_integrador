import Swal, { SweetAlertIcon } from 'sweetalert2';

export function notificacionSimple(titulo: string, cuerpo: string, icono: SweetAlertIcon) {
    Swal.fire({
        title: titulo,
        text: cuerpo,
        icon: icono
    });
}

export function notificacionPromesa(titulo: string, textbtnConfirm: string,
  btnDenyShow: boolean, textbtnDeny: string, btnCancelShow: boolean): Promise<boolean> {
    
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