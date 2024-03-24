import { Model } from 'sequelize-typescript';
import { Registro } from '../../registro/entities/registro.entity';
export declare class Pessoa extends Model {
    nome_pessoa: string;
    fotos: string;
    registro: Registro[];
}
