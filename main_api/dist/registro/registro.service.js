"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const registro_entity_1 = require("./entities/registro.entity");
let RegistroService = class RegistroService {
    constructor(registroRepository) {
        this.registroRepository = registroRepository;
    }
    async cadastrarRegistro(dados) {
        try {
            await this.registroRepository.create(dados);
            return {
                msg: 'registrado com sucesso',
            };
        }
        catch (err) {
            throw new Error(`não foi posível realizar o cadastro. ${err.message}`);
        }
    }
    async listarRegistros(id_usuario) {
        try {
            const registros = await this.registroRepository.findAll({
                order: [['createdAt', 'DESC']],
                where: { usuario_id: id_usuario }
            });
            return registros;
        }
        catch (err) {
            throw new Error(`não foi posível encontrar nada. ${err.message}`);
        }
    }
    async listarUltimoRegistro() {
        try {
            const registro = await this.registroRepository.findAll({
                limit: 1,
                order: [['createdAt', 'DESC']],
                where: {
                    enviado: 1,
                },
            });
            return registro;
        }
        catch (err) {
            throw new Error(`não foi posível encontrar nada. ${err.message}`);
        }
    }
    async atualizarRegistro() {
        const registro = await this.registroRepository.findOne({
            limit: 1,
            order: [['createdAt', 'DESC']],
        });
        await this.registroRepository.update({ enviado: 0 }, {
            where: {
                id: registro.id,
            },
        });
    }
};
RegistroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(registro_entity_1.Registro)),
    __metadata("design:paramtypes", [Object])
], RegistroService);
exports.RegistroService = RegistroService;
//# sourceMappingURL=registro.service.js.map