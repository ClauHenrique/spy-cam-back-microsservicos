import { Repository } from 'sequelize-typescript';
import { Usuario } from './entities/usuario.entity';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    login(userEmail: any): Promise<Usuario | undefined>;
    cadastrarUser(user: any): Promise<void>;
    userExists(user: any): Promise<Usuario>;
}
