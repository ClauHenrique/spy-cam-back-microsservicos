import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: Record<string, any>): Promise<{
        access_token: string;
    }>;
    loginFromCar(loginDto: Record<string, any>): Promise<{
        id_camera: string;
    }>;
    getProfile(req: any): any;
}
