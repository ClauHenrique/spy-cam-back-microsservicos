import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Registro } from 'src/registro/entities/registro.entity';

@Table({ tableName: 'usuario' })
export class Usuario extends Model {
  @Column({ allowNull: false })
  nome: string;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  senha: string;

  @HasMany(() => Registro)
  registro: Registro[];
}
