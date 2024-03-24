import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.services';
import { CameraService } from 'src/camera/camera.service';
export declare class AuthService {
    private usuarioService;
    private cameraService;
    private jwtService;
    constructor(usuarioService: UsuarioService, cameraService: CameraService, jwtService: JwtService);
    login(email: string, senha: string): Promise<{
        access_token: string;
    }>;
    loginFromCar(email: string, senha: string): Promise<{
        id_camera: string;
    }>;
}
