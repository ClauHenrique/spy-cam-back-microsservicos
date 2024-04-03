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
exports.Pessoa = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const registro_entity_1 = require("../../registro/entities/registro.entity");
const usuario_pessoa_entity_1 = require("../../usuario_pessoa/entities/usuario_pessoa.entity");
let Pessoa = class Pessoa extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Pessoa.prototype, "nome_pessoa", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], Pessoa.prototype, "fotos", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => registro_entity_1.Registro),
    __metadata("design:type", Array)
], Pessoa.prototype, "registro", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => usuario_pessoa_entity_1.Usuario_Pessoa),
    __metadata("design:type", Array)
], Pessoa.prototype, "schedules", void 0);
Pessoa = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'pessoa' })
], Pessoa);
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.entity.js.map