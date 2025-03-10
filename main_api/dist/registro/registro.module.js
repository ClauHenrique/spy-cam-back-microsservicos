"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const registro_service_1 = require("./registro.service");
const registro_controller_1 = require("./registro.controller");
const registro_entity_1 = require("./entities/registro.entity");
let RegistroModule = class RegistroModule {
};
RegistroModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([registro_entity_1.Registro])],
        providers: [registro_service_1.RegistroService],
        controllers: [registro_controller_1.RegistroController],
    })
], RegistroModule);
exports.RegistroModule = RegistroModule;
//# sourceMappingURL=registro.module.js.map