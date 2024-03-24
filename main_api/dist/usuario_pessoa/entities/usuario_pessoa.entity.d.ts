import { Model } from 'sequelize-typescript';
import { Pessoa } from '../../pessoa/entities/pessoa.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
export declare class Usuario_Pessoa extends Model {
    usuario_id: number;
    usuario: Usuario;
    pessoa_id: number;
    pessoa: Pessoa;
}
