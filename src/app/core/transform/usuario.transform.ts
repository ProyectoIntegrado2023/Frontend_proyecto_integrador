import { UsuarioEntity } from './../model/database/usuario.model';
import { UsuarioModel } from '../model/backend/usuario.model';
import { Usuario } from '../model/frontend/usuario.model';

export function UsuarioFiltrarParaFrontend(usuarioModel: UsuarioModel): Usuario {
    return usuarioModel != null ? {
        id          :   usuarioModel.id_usuario,
        username    :   usuarioModel.username,
        password    :   usuarioModel.password
    } : new Usuario()
}

export function UsuarioFiltrarParaBackend(usuario: Usuario): UsuarioEntity {
    return usuario != null ? {
        id_USUARIO   :   usuario.id,
        username    :   usuario.username,
        password    :   usuario.password
    } : new UsuarioEntity()
}