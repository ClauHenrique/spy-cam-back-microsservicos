"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraModule = void 0;
const common_1 = require("@nestjs/common");
const camera_service_1 = require("./camera.service");
const camera_controller_1 = require("./camera.controller");
const sequelize_1 = require("@nestjs/sequelize");
const camera_entity_1 = require("./entities/camera.entity");
let CameraModule = class CameraModule {
};
CameraModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([camera_entity_1.Camera])],
        controllers: [camera_controller_1.CameraController],
        providers: [camera_service_1.CameraService],
        exports: [camera_service_1.CameraService]
    })
], CameraModule);
exports.CameraModule = CameraModule;
//# sourceMappingURL=camera.module.js.map