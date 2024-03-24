import { Model } from 'sequelize-typescript';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class Camera extends Model {
    id: string;
    usuario_id: number;
    usuario: Usuario;
}
