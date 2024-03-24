"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaModule = void 0;
const common_1 = require("@nestjs/common");
const pessoa_entity_1 = require("./entities/pessoa.entity");
const sequelize_1 = require("@nestjs/sequelize");
const pessoa_service_1 = require("./pessoa.service");
const pessoa_controller_1 = require("./pessoa.controller");
const usuario_pessoa_entity_1 = require("../usuario_pessoa/entities/usuario_pessoa.entity");
const api_face_reco_module_1 = require("../api-face-reco/api-face-reco.module");
let PessoaModule = class PessoaModule {
};
PessoaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([pessoa_entity_1.Pessoa, usuario_pessoa_entity_1.Usuario_Pessoa]),
            api_face_reco_module_1.ApiFaceRecoModule
        ],
        providers: [pessoa_service_1.PessoaService],
        controllers: [pessoa_controller_1.PessoaController],
    })
], PessoaModule);
exports.PessoaModule = PessoaModule;
//# sourceMappingURL=pessoa.module.js.map