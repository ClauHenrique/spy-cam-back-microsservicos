import { CameraService } from './camera.service';
import { CreateCameraDto } from './dto/create-camera.dto';
export declare class CameraController {
    private readonly cameraService;
    constructor(cameraService: CameraService);
    create(createCameraDto: CreateCameraDto): Promise<import("./entities/camera.entity").Camera>;
    remove(id: string): string;
}
