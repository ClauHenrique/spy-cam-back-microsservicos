import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Camera } from 'src/camera/entities/camera.entity';

@Table({ tableName: 'usuario' })
export class Usuario extends Model {
  @Column({ allowNull: false })
  nome: string;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  senha: string;

  @HasMany(() => Camera)
  cameras: Camera[];
}
