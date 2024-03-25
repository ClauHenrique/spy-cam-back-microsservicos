import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.services';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    login(email: string, senha: string): Promise<{
        access_token: string;
    }>;
    loginFromCar(email: string, senha: string): Promise<{
        id_usuario: any;
    }>;
}
