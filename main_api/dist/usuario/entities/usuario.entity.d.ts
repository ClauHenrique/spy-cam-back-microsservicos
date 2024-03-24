import { Model } from 'sequelize-typescript';
import { Camera } from 'src/camera/entities/camera.entity';
export declare class Usuario extends Model {
    nome: string;
    email: string;
    senha: string;
    cameras: Camera[];
}
