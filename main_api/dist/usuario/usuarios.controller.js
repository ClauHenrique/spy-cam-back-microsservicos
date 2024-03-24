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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const usuario_services_1 = require("./usuario.services");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let UsuariosController = class UsuariosController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async cadastrarPessoa(usuario, res) {
        try {
            if (Object.values(usuario).length == 0) {
                return res
                    .status(400)
                    .json({ msg: 'corpo da requisição não pode ser null' });
            }
            if (!usuario.nome || !usuario.email || !usuario.senha) {
                return res.status(400).json({ msg: 'preencha todos os campos' });
            }
            const check = await this.usuarioService.userExists(usuario);
            if (check) {
                return res.status(400).json({ msg: 'esse usuário já existe' });
            }
            this.usuarioService.cadastrarUser(usuario);
            return res.status(201).json({ msg: 'usuario cadastrado' });
        }
        catch (err) {
            throw new common_1.HttpException(`erro no servidor ${err}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/cadastro'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "cadastrarPessoa", null);
UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuario_services_1.UsuarioService])
], UsuariosController);
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuarios.controller.js.map