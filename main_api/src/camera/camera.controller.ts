import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CameraService } from './camera.service';
import { CreateCameraDto } from './dto/create-camera.dto';
import { UpdateCameraDto } from './dto/update-camera.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('camera')
export class CameraController {
  constructor(private readonly cameraService: CameraService) {}

  @Public()
  @Post('/create')
  create(@Body() createCameraDto: CreateCameraDto) {
    return this.cameraService.create(createCameraDto);
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cameraService.remove(+id);
  }
}
