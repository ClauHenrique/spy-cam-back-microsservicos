import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Registro } from './entities/registro.entity';

@Injectable()
export class RegistroService {
  constructor(
    @InjectModel(Registro)
    private registroRepository: Repository<Registro>
  ) {}


  async listarRegistros(id_usuario: number) {
    try {
      const registros = await this.registroRepository.findAll({
        order: [['createdAt', 'DESC']],
        where: { usuario_id: id_usuario }
      });
      return registros;
    } catch (err) {
      throw new Error(`não foi posível encontrar nada. ${err.message}`);
    }
  }


}
