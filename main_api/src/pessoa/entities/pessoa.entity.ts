import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Registro } from '../../registro/entities/registro.entity';
import { Usuario_Pessoa } from 'src/usuario_pessoa/entities/usuario_pessoa.entity';

@Table({ tableName: 'pessoa' })
export class Pessoa extends Model {
  @Column
  nome_pessoa: string;

  @Column({ type: DataType.TEXT })
  fotos: string;

  @HasMany(() => Registro)
  registro: Registro[];

  @HasMany(() => Usuario_Pessoa)
  schedules: Usuario_Pessoa[]
}
