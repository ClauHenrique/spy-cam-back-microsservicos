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
exports.RegistroController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../auth/decorators/public.decorator");
const registro_service_1 = require("./registro.service");
const registro_dto_1 = require("./dto/registro.dto");
const rxjs_1 = require("rxjs");
let RegistroController = class RegistroController {
    constructor(registroService) {
        this.registroService = registroService;
    }
    async listarRegistro() {
        return this.registroService.listarRegistros();
    }
    async cadastrarRegistros(registro) {
        return this.registroService.cadastrarRegistro(registro);
    }
    async atualizarRegistro(registro_id) {
        await this.registroService.atualizarRegistro();
    }
    async buscarUltimoRegistro() {
        const registro = await this.registroService.listarUltimoRegistro();
        if (registro.length > 0) {
            await this.registroService.atualizarRegistro();
        }
        return { data: registro };
    }
    async Notificar(response) {
        return (0, rxjs_1.defer)(() => this.buscarUltimoRegistro()).pipe((0, rxjs_1.repeat)({
            delay: 1000,
        }), (0, rxjs_1.tap)((registro) => {
            if (registro['enviado'] === 1) {
                setTimeout(() => {
                    response.end();
                }, 5000);
            }
        }), (0, rxjs_1.map)((registro) => ({
            type: 'message',
            data: registro,
        })));
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "listarRegistro", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/cadastro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registro_dto_1.CreateRegistroDto]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "cadastrarRegistros", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Patch)(':registro_id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "atualizarRegistro", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Sse)('watch'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "Notificar", null);
RegistroController = __decorate([
    (0, common_1.Controller)('registro'),
    __metadata("design:paramtypes", [registro_service_1.RegistroService])
], RegistroController);
exports.RegistroController = RegistroController;
//# sourceMappingURL=registro.controller.js.map