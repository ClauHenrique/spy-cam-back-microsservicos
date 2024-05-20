import { Repository } from 'sequelize-typescript';
import { Registro } from './entities/registro.entity';
export declare class RegistroService {
    private registroRepository;
    constructor(registroRepository: Repository<Registro>);
    listarRegistros(id_usuario: number): Promise<Registro[]>;
}
