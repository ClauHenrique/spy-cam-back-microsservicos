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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuario_services_1 = require("../usuario/usuario.services");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(usuarioService, jwtService) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
    }
    async login(email, senha) {
        try {
            const user = await this.usuarioService.login(email);
            const senhaValidada = await bcrypt.compare(senha, user.senha);
            if (senhaValidada) {
                const payload = { email: user.email, sub: user.id };
                return {
                    access_token: await this.jwtService.signAsync(payload),
                };
            }
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        catch (err) {
            console.log(err);
            throw new common_1.UnauthorizedException('senha incorreta');
        }
    }
    async loginFromCar(email, senha) {
        try {
            const user = await this.usuarioService.login(email);
            const senhaValidada = await bcrypt.compare(senha, user.senha);
            if (senhaValidada) {
                return { id_usuario: user.id };
            }
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        catch (err) {
            console.log(err);
            throw new common_1.UnauthorizedException('senha incorreta');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_services_1.UsuarioService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map