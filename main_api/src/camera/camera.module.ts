import { Module } from '@nestjs/common';
import { CameraService } from './camera.service';
import { CameraController } from './camera.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Camera } from './entities/camera.entity';

@Module({
  imports: [SequelizeModule.forFeature([Camera])],
  controllers: [CameraController],
  providers: [CameraService],
  exports: [CameraService]
})
export class CameraModule {}
