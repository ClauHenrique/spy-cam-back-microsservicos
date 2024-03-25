import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: Record<string, any>): Promise<{
        access_token: string;
    }>;
    loginFromCar(loginDto: Record<string, any>): Promise<{
        id_usuario: any;
    }>;
    getProfile(req: any): any;
}
