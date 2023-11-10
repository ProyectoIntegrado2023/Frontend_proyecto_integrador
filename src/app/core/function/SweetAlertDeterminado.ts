import Swal, { SweetAlertIcon } from 'sweetalert2';

export function notificacionCon_titulo_cuerpo_icono(titulo: string, cuerpo: string, icono: SweetAlertIcon) {
    Swal.fire({
        title: titulo,
        text: cuerpo,
        icon: icono
    });
}