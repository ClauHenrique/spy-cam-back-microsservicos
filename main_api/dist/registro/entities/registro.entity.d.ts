import { Model } from 'sequelize-typescript';
import { Pessoa } from '../../pessoa/entities/pessoa.entity';
export declare class Registro extends Model {
    mensagem: string;
    pessoa_id: number;
    usuario_id: number;
    pessoa: Pessoa;
}
