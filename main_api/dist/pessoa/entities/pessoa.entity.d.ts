import { Model } from 'sequelize-typescript';
import { Registro } from '../../registro/entities/registro.entity';
import { Usuario_Pessoa } from 'src/usuario_pessoa/entities/usuario_pessoa.entity';
export declare class Pessoa extends Model {
    nome_pessoa: string;
    fotos: string;
    registro: Registro[];
    schedules: Usuario_Pessoa[];
}
