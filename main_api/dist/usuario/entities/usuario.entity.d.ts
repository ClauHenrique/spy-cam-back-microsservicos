import { Model } from 'sequelize-typescript';
import { Registro } from 'src/registro/entities/registro.entity';
export declare class Usuario extends Model {
    nome: string;
    email: string;
    senha: string;
    registro: Registro[];
}
