import { Model } from 'sequelize-typescript';
import { Pessoa } from '../../pessoa/entities/pessoa.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
export declare class Registro extends Model {
    mensagem: string;
    pessoa_id: number;
    pessoa: Pessoa;
    usuario_id: number;
    usuario: Usuario;
}
