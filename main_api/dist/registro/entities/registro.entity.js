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
exports.Registro = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const pessoa_entity_1 = require("../../pessoa/entities/pessoa.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
let Registro = class Registro extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Registro.prototype, "mensagem", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => pessoa_entity_1.Pessoa),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Registro.prototype, "pessoa_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => pessoa_entity_1.Pessoa, { onDelete: 'CASCADE' }),
    __metadata("design:type", pessoa_entity_1.Pessoa)
], Registro.prototype, "pessoa", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => usuario_entity_1.Usuario),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Registro.prototype, "usuario_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => usuario_entity_1.Usuario, { onDelete: 'CASCADE' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Registro.prototype, "usuario", void 0);
Registro = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'registro' })
], Registro);
exports.Registro = Registro;
//# sourceMappingURL=registro.entity.js.map