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
exports.PessoaController = void 0;
const common_1 = require("@nestjs/common");
const pessoa_service_1 = require("./pessoa.service");
const pessoa_entity_1 = require("./entities/pessoa.entity");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const multer_1 = require("multer");
const usuario_guard_1 = require("../usuario/usuario.guard");
const public_decorator_1 = require("../auth/decorators/public.decorator");
const api_face_reco_service_1 = require("../api-face-reco/api-face-reco.service");
let PessoaController = class PessoaController {
    constructor(pessoaService, apiRecogService) {
        this.pessoaService = pessoaService;
        this.apiRecogService = apiRecogService;
    }
    async cadastrarPessoa(pessoa, fotos, usuario) {
        let arrayFotos = '';
        fotos.forEach((foto) => {
            arrayFotos += foto.filename;
        });
        this.pessoaService.cadastrarPessoa(pessoa, arrayFotos, usuario);
        await this.apiRecogService.sendImgPerson(arrayFotos);
    }
    async listarPessoas(req) {
        const id_usuario = req['user'].sub;
        return this.pessoaService.listarPessoas(id_usuario);
    }
    async apagarPessoa(pessoa_id) {
        return this.pessoaService.removerPessoa(pessoa_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('fotos', 5, {
        storage: (0, multer_1.diskStorage)({
            destination: './arquivos/pessoas',
            filename: (req, fotos, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                cb(null, `${randomName}${(0, path_1.extname)(fotos.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, usuario_guard_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pessoa_entity_1.Pessoa,
        Array, Object]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "cadastrarPessoa", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "listarPessoas", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Delete)(':pessoa_id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "apagarPessoa", null);
PessoaController = __decorate([
    (0, common_1.Controller)('pessoa'),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService,
        api_face_reco_service_1.ApiFaceRecoService])
], PessoaController);
exports.PessoaController = PessoaController;
//# sourceMappingURL=pessoa.controller.js.map