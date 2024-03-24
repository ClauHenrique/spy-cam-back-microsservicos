import { UsuarioService } from './usuario.services';
import { Response } from 'express';
export declare class UsuariosController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    cadastrarPessoa(usuario: any, res: Response): Promise<any>;
}
