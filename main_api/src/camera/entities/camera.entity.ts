import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { v4 as uuidv4 } from 'uuid';

@Table({ tableName: 'camera' })
export class Camera extends Model{
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: () => uuidv4() // Define um UUID como valor padrão
    })
    id: string;

    @ForeignKey(() => Usuario)
    @Column
    usuario_id: number;

    @BelongsTo(() => Usuario)
    usuario: Usuario;
}
