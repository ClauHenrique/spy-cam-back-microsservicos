import { Injectable } from '@nestjs/common';
import { CreateCameraDto } from './dto/create-camera.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Camera } from './entities/camera.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class CameraService {

  constructor(
    @InjectModel(Camera)
    private cameraRepository: Repository<Camera>
  ) {}

  async create(createCameraDto: CreateCameraDto) {
    
    return await this.cameraRepository.create({
        usuario_id: createCameraDto.usuario_id
      })
  }

  async getCamById(usuario_id: number) {
    return await this.cameraRepository.findOne({
      where: { usuario_id: usuario_id },
    })
  }

  remove(id: number) {
    return `This action removes a #${id} camera`;
  }
}
