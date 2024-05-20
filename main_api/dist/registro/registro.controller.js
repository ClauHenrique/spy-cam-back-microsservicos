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
const registro_service_1 = require("./registro.service");
const rxjs_1 = require("rxjs");
const rabbitmq_service_1 = require("../rabbitmq/rabbitmq.service");
let RegistroController = class RegistroController {
    constructor(registroService, rabbitmqService) {
        this.registroService = registroService;
        this.rabbitmqService = rabbitmqService;
        this.rabbitmqService.ConsumeMessageRabbitmq();
    }
    async listarRegistro(req) {
        const id_usuario = req['user'].sub;
        return this.registroService.listarRegistros(id_usuario);
    }
    async Notificar(response, request) {
        const id_user = request['user'].sub;
        response.setHeader('Content-Type', 'text/event-stream');
        response.setHeader('Cache-Control', 'no-cache');
        response.setHeader('Connection', 'keep-alive');
        return (0, rxjs_1.defer)(() => this.rabbitmqService.getMessages(id_user)).pipe((0, rxjs_1.repeat)({
            delay: 1000,
        }), (0, rxjs_1.tap)((registro) => {
            console.log(registro);
            setTimeout(() => {
                response.end();
            }, 2000);
        }), (0, rxjs_1.map)((registro) => ({
            type: 'message',
            data: registro,
        })));
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "listarRegistro", null);
__decorate([
    (0, common_1.Sse)('sse'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "Notificar", null);
RegistroController = __decorate([
    (0, common_1.Controller)('registro'),
    __metadata("design:paramtypes", [registro_service_1.RegistroService,
        rabbitmq_service_1.RabbitmqService])
], RegistroController);
exports.RegistroController = RegistroController;
//# sourceMappingURL=registro.controller.js.map