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
exports.UsuarioService = void 0;
const usuario_entity_1 = require("./entities/usuario.entity");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bcrypt = require("bcryptjs");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async login(userEmail) {
        try {
            return await this.usuarioRepository.findOne({
                where: { email: userEmail },
            });
        }
        catch (err) {
            throw new common_1.UnprocessableEntityException(`Acesso negado. ${err.message}`);
        }
    }
    async cadastrarUser(user) {
        try {
            console.log(user);
            user.senha = await bcrypt.hash(user.senha, 8);
            await this.usuarioRepository.create(user);
        }
        catch (err) {
            throw new Error(`não foi posível realizar o cadastro. ${err.message}`);
        }
    }
    async userExists(user) {
        try {
            const userExists = await this.usuarioRepository.findOne({
                where: { email: user.email },
            });
            return userExists;
        }
        catch (err) {
            throw new Error(`não foi posível realizar a operacao ${err.message}`);
        }
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [Object])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.services.js.map