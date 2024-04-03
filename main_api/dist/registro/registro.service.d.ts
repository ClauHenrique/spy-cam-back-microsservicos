import { Repository } from 'sequelize-typescript';
import { Registro } from './entities/registro.entity';
export declare class RegistroService {
    private registroRepository;
    constructor(registroRepository: Repository<Registro>);
    cadastrarRegistro(dados: any): Promise<{
        msg: string;
    }>;
    listarRegistros(id_usuario: number): Promise<Registro[]>;
    listarUltimoRegistro(): Promise<Registro[]>;
    atualizarRegistro(): Promise<void>;
}
