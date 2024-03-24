"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCameraDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_camera_dto_1 = require("./create-camera.dto");
class UpdateCameraDto extends (0, swagger_1.PartialType)(create_camera_dto_1.CreateCameraDto) {
}
exports.UpdateCameraDto = UpdateCameraDto;
//# sourceMappingURL=update-camera.dto.js.map