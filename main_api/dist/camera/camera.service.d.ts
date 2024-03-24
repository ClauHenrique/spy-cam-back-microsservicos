import { CreateCameraDto } from './dto/create-camera.dto';
import { Camera } from './entities/camera.entity';
import { Repository } from 'sequelize-typescript';
export declare class CameraService {
    private cameraRepository;
    constructor(cameraRepository: Repository<Camera>);
    create(createCameraDto: CreateCameraDto): Promise<Camera>;
    getCamById(usuario_id: number): Promise<Camera>;
    remove(id: number): string;
}
