import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Pessoa } from '../../pessoa/entities/pessoa.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';


@Table({ tableName: 'registro' })
export class Registro extends Model {
  @Column
  mensagem: string;

  @ForeignKey(() => Pessoa)
  @Column
  pessoa_id: number;

  @BelongsTo(() => Pessoa, { onDelete: 'CASCADE' })
  pessoa: Pessoa;

  @ForeignKey(() => Usuario)
  @Column
  usuario_id: number

  @BelongsTo(() => Usuario, { onDelete: 'CASCADE' })
  usuario: Usuario

}
